import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.aiKey);

// a copy of the plans in the back-end to prevent manipulation
let plans = [
  {
    id: 1,
    ram: '1gb',
    cpu: '2 vCores @3.4GHz',
    network: '100 mb/s',
    price: '$4',
  },
  {
    id: 2,
    ram: '4gb',
    cpu: '4 vCores @ 3.4GHz',
    network: '150 mb/s',
    price: '$16',
  },
  {
    id: 3,
    ram: '8gb',
    cpu: '5 vCores @ 3.4GHz',
    network: '200 mb/s',
    price: '$32',
  },
  {
    id: 4,
    ram: '16gb',
    cpu: '6 vCores @ 3.4GHz',
    network: '300 mb/s',
    price: '$64',
  },
  {
    id: 5,
    ram: '20gb',
    cpu: '7 vCores @ 3.4GHz',
    network: '400 mb/s',
    price: '$80',
  },
  {
    id: 6,
    ram: '24gb',
    cpu: '8 vCores @ 3.4GHz',
    network: '500 mb/s',
    price: '$96',
  },
  {
    id: 7,
    ram: '32gb',
    cpu: '8 vCores @ 3.4GHz',
    network: '1000 mb/s',
    price: '$128',
  },
  {
    id: 8,
    ram: '64gb',
    cpu: '12 vCores @ 4.2GHz',
    network: '1000 mb/s',
    price: '$254',
  },
];
let message = (plan, days, CPUm, CPUp, RAMm, RAMp) => {
  return (
    `these are the plans aviliable:

  { id: 1, ram: '1gb', cpu: '2 vCores @3.4GHz', network: '100 mb/s', price: '$4', }, { id: 2, ram: '4gb', cpu: '4 vCores @ 3.4GHz', network: '150 mb/s', price: '$16', }, { id: 3, ram: '8gb', cpu: '5 vCores @ 3.4GHz', network: '200 mb/s', price: '$32', }, { id: 4, ram: '16gb', cpu: '6 vCores @ 3.4GHz', network: '300 mb/s', price: '$64', }, { id: 5, ram: '20gb', cpu: '7 vCores @ 3.4GHz', network: '400 mb/s', price: '$80', }, { id: 6, ram: '24gb', cpu: '8 vCores @ 3.4GHz', network: '500 mb/s', price: '$96', }, { id: 7, ram: '32gb', cpu: '8 vCores @ 3.4GHz', network: '1000 mb/s', price: '$128', }, { id: 8, ram: '64gb', cpu: '12 vCores @ 4.2GHz', network: '1000 mb/s', price: '$254', }
  
  
  
  I'm using id "${plan}" and my resources over the last ${days} days are:
  
  mean CPU usage: ${CPUm}%
  
  max CPU usage: ${CPUp}%
  
  mean RAM usage: ${RAMm}%
  
  max RAM usage: ${RAMp}%
  
  
  
  recommend what is best the plan considering "performance and cost based on my current" 
  
  
  
  
  
  *the output should look like*: {recommendation:` + '${id}} only'
  );
};
export async function POST(request: Request) {
  const data = await request.json();
  //   console.log(data);
  const mean = (arr) =>
    Math.round(arr.reduce((acc, num) => acc + num, 0) / arr.length);
  function extractRecommendation(text) {
    const regex = /\{recommendation:(\d+)\}/;

    const match = text.match(regex);

    if (match) {
      return parseInt(match[1]);
    } else {
      return null;
    }
  }
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  const result = await model
    .generateContent(
      message(
        data.plan,
        data.len,
        mean(data.cpu),
        Math.max(...data.cpu),
        mean(data.ram),
        Math.max(...data.ram),
      ),
    )
    .catch((err) => console.log('501'));
  const response = await result.response;
  const text = response.text();
  console.log(text);

  let rec = extractRecommendation(text);
  console.log(rec);

  return NextResponse.json({
    recommendation: rec ? rec : 1,
  });
}
