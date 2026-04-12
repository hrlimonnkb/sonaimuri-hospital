// src/data/diagnosticTestData.js

export const hematologyTests = [
  { name: "সিপি (টিসি, ডিসি, ইএসআর, এইচবি%)", price: "৪৩২/-" },
  { name: "প্লেটলেট কাউন্ট", price: "১৮০/-" },
];

export const serologyTests = [
  { name: "ডেঙ্গু টেস্ট", price: "৫০০/-" },
  { name: "এইচ আই ভি টেস্ট", price: "১২৫০/-" },
];

export const hormoneTests = [
  { name: "টি৩ / টি৪ / টিএসএইচ", price: "৩৬৩০/-" },
  { name: "এফটি৩/এফটি৪ (প্রতিটি)", price: "১৪৪০/-" },
];

export const normalXrayTests = [
  { name: "12 x 15 ফিল্ম (এডাল্ট)", price: "৩০০/-" },
  { name: "ওপিজি", price: "১৫৫/-" },
];

export const testGroups = [
  {
    groupName: "ক্লিনিক্যাল ল্যাব টেস্ট (Clinical Lab Tests)",
    id: "lab-tests",
    categories: [
      { categoryName: "হেমাটোলজি (Hematology)", tests: hematologyTests },
      { categoryName: "সেরোলজি (Serology)", tests: serologyTests },
      { categoryName: "হরমোন (Hormone)", tests: hormoneTests },
    ],
  },
  {
    groupName: "ইমেজিং ও রেডিওলজি (Imaging & Radiology)",
    id: "imaging",
    categories: [
      { categoryName: "নরমাল এক্স-রে (Normal X-Ray)", tests: normalXrayTests },
      { categoryName: "ডিজিটাল এক্স-রে (Digital X-Ray)", tests: normalXrayTests }, 
    ],
  },
  {
    groupName: "বিশেষ স্ক্রিনিং ও প্যাকেজ (Special Screening)",
    id: "packages",
    categories: [
      { categoryName: "হৃদপিণ্ড ও কার্ডিয়াক পরীক্ষা", tests: serologyTests }, 
      { categoryName: "ডায়াবেটিস স্ক্রিনিং প্যাকেজ", tests: hematologyTests }, 
    ],
  },
];