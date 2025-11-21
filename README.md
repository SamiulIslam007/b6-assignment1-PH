Interface এবং Type-এর মধ্যে পার্থক্য

TypeScript-এ interface এবং type দুটোই অবজেক্টের স্ট্রাকচার নির্ধারণ করতে ব্যবহৃত হয়। দেখতে একই মনে হলেও এদের মধ্যে গুরুত্বপূর্ণ কিছু পার্থক্য আছে।

Interface

মূলত অবজেক্টের গঠন বর্ণনা করতে ব্যবহৃত হয়

Object-Oriented Programming (OOP) স্টাইলে বেশি মানানসই

সহজে extend করা যায়

একাধিকবার একই interface ডিফাইন করলে তা merge হয়ে যায়

Example:

interface User {
  name: string;
}
interface Admin extends User {
  role: string;
}

Type

আরও বেশি flexible

অবজেক্ট ছাড়াও union, intersection, primitive, function সবকিছু define করতে পারে

& দিয়ে extend হয়

একই নামে দুইবার type declare করা যায় না

Example:

type User = {
  name: string;
}
type Admin = User & {
  role: string;
}

সংক্ষেপে তুলনা
Feature	Interface	Type
Merge	হয়	হয় না
Extend	সহজ	& ব্যবহার করতে হয়
Flexibility	কম	বেশি
Use-case	অবজেক্ট	সবকিছু
any, unknown এবং never এর পার্থক্য

TypeScript-এ এই তিনটি টাইপ দেখতে কাছাকাছি হলেও আচরণ সম্পূর্ণ আলাদা।

any

পুরোপুরি “ছাড়পত্র” টাইপ

যেকোনো ভ্যালু / যেকোনো অপারেশন করা যায়

TypeScript কোনো চেক করে না

সবচেয়ে unsafe

let value: any = 10;
value = "hello";
value = true;

 unknown

any-এর মতোই সব ভ্যালু রাখা যায়

তবে type check ছাড়া কোনো অপারেশন করা যাবে না

safer alternative to any

let data: unknown = 10;
if (typeof data === "number") {
  console.log(data + 5);
}

never

যেসব ফাংশন কখনও return করে না

যেমন error throw করা বা infinite loop

function crash(): never {
  throw new Error("Failed");
}

