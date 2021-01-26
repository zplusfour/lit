import { readLines } from 'https://deno.land/std@0.76.0/io/bufio.ts';

export function output(s: any) {
  console.log(s);
}

export async function input(s: any) {
  console.log(s);
  for await (const line of readLines(Deno.stdin)) {
    return line;
  }
}

export function split(s: string, seperator: string) {
  return s.split(seperator);
}

export function len(s: any) {
  return s.length;
}

export function has(s: any, seperator: any) {
  return s.includes(seperator);
}

export function endsWith(s: string, seperator: string) {
  return s.endsWith(seperator);
}

export function startsWith(s: string, seperator: string) {
  return s.startsWith(seperator);
}

export function replace(s: string, oldsep: string, newsep: string) {
  return s.replace(oldsep, newsep);
}

export function lower(s: string) {
  return s.toLowerCase();
}

export function upper(s: string) {
  return s.toUpperCase();
}

export function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function trim(s: string) {
  return s.trim();
}