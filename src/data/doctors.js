// import doctorRasul from "@/assets/images/rasul.png";   
// import doctorAsad from "@/assets/images/asaduzzaman.png"; 
// import doctorSaiful from "@/assets/images/saiful.png";
// import doctorKhadija from "@/assets/images/khadija.png";
// import doctorAhsan from "@/assets/images/ahsan-habib.png";

// export const doctorsData = [
//   {
//     id: 1,
//     name: "Dr. Rasul Amin",
//     department: "Cardiology",
//     designation: "MBBS (Dhaka), BCS (Health), MD (Cardiology), FSCAI (USA). Clinical & Interventional Cardiologist. Associate Professor (Cardiology Dept.), PG Hospital, Dhaka.",
//     hospital: "Sonaimuri Maa O Shishu Hospital",
//     schedule: "Every Friday | 3:00 PM - 8:00 PM",
//     image: doctorRasul,
//   },
//   {
//     id: 2,
//     name: "Dr. Toufika Ahmed",
//     department: "Gynecology & Obs.",
//     designation: "MBBS, BCS (Health), DGO, FCPS (Gynecology). Assistant Professor & Head of Dept. (Gynecology), Shaheed Suhrawardy Medical College & Hospital, Dhaka.",
//     hospital: "Sonaimuri Maa O Shishu Hospital",
//     schedule: "Every Friday | 3:00 PM - 8:00 PM",
//     image: "/images/doctor-toufika.jpg",
//   },
//   {
//     id: 3,
//     name: "Dr. Md. Asaduzzaman",
//     department: "Internal Medicine",
//     designation: "MBBS (CMC), BCS (FP), FCPS (Final Part, Med), MRCP (UK). PGT in Pediatrics. Medical Officer, MCH Center, Lakshmipur.",
//     hospital: "Sonaimuri Maa O Shishu Hospital",
//     schedule: "Everyday | 10:00 AM - 8:00 PM",
//     image: doctorAsad,
//   },
//   {
//     id: 4,
//     name: "Dr. Md. Saiful Islam",
//     department: "Physical Medicine",
//     designation: "MBBS, BCS (Health), MD (Physical Medicine & Rehab - BSMMU), FCPS (Medicine-part), CCD (BIRDEM). Consultant, Physical Medicine & Rehabilitation Dept., Noakhali.",
//     hospital: "Sonaimuri Maa O Shishu Hospital",
//     schedule: "Every Thursday | 2:00 PM - 8:00 PM",
//     image: doctorSaiful,
//   },
//   {
//     id: 5,
//     name: "Dr. Khadija Akter Shuvo",
//     department: "Gynecology & Sonology",
//     designation: "MBBS (Khulna Medical College), CMU (Ultrasonography), PGT (Gynae). BM&DC: A-145671. Experienced in Mother & Child diseases. Specially trained in Normal Delivery.",
//     hospital: "Sonaimuri Maa O Shishu Hospital",
//     schedule: "Everyday | 10:00 AM - 8:00 PM",
//     image: doctorKhadija,
//   },
//   {
//     id: 6,
//     name: "Dr. Ahsan Habib (BPT)",
//     department: "Physiotherapy",
//     designation: "BPT. Physiotherapy Specialist (Arthritis, Pain & Paralysis). Consultant at Sonaimuri Maa O Shishu Hospital Physiotherapy Unit and other care centers.",
//     hospital: "Sonaimuri Maa O Shishu Hospital",
//     schedule: "Everyday | 10:00 AM - 8:00 PM",
//     image: doctorAhsan,
//   }
// ];


import doctorRasul from "@/assets/images/rasul.png";   
import doctorAsad from "@/assets/images/asaduzzaman.png"; 
import doctorSaiful from "@/assets/images/saiful.png";
import doctorKhadija from "@/assets/images/khadija.png";
import doctorAhsan from "@/assets/images/ahsan-habib.png";

export const doctorsData = [
  {
    id: 1,
    name: "Dr. Rasul Amin",
    department: "Cardiology",
    designation: "MBBS (Dhaka), BCS (Health), MD (Cardiology), FSCAI (USA). Clinical & Interventional Cardiologist. Associate Professor (Cardiology Dept.), PG Hospital, Dhaka.",
    hospital: "Sonaimuri Maa O Shishu Hospital",
    schedule: "Every Friday | 3:00 PM - 8:00 PM",
    image: doctorRasul,
    experience: "15+ Years",
    gender: "Male",
    phone: "01705-319271",
    email: "dr.rasul@smosh.bd",
    bio: "Dr. Rasul Amin is a leading Clinical & Interventional Cardiologist with over 15 years of experience treating complex heart conditions. He is highly dedicated to providing state-of-the-art cardiac care and has helped thousands of patients manage hypertension and heart disease.",
    treatments: [
      "ECG & Echocardiogram Analysis",
      "Heart Failure Management",
      "Hypertension (High BP) Treatment",
      "Coronary Angiography Counseling"
    ],
    fees: {
      new: "1000 TK",
      followUp: "700 TK"
    }
  },
  {
    id: 2,
    name: "Dr. Toufika Ahmed",
    department: "Gynecology & Obs.",
    designation: "MBBS, BCS (Health), DGO, FCPS (Gynecology). Assistant Professor & Head of Dept. (Gynecology), Shaheed Suhrawardy Medical College & Hospital, Dhaka.",
    hospital: "Sonaimuri Maa O Shishu Hospital",
    schedule: "Every Friday | 3:00 PM - 8:00 PM",
    image: "/images/doctor-toufika.jpg",
    experience: "12+ Years",
    gender: "Female",
    phone: "01705-319271",
    email: "dr.toufika@smosh.bd",
    bio: "Dr. Toufika Ahmed is a highly skilled Gynecologist and Obstetrician. She specializes in high-risk pregnancies, infertility treatments, and women's overall reproductive health, bringing compassionate care to mothers in Noakhali.",
    treatments: [
      "Normal & C-Section Deliveries",
      "High-Risk Pregnancy Care",
      "Menstrual Disorder Treatment",
      "Infertility Counseling"
    ],
    fees: {
      new: "800 TK",
      followUp: "600 TK"
    }
  },
  {
    id: 3,
    name: "Dr. Md. Asaduzzaman",
    department: "Internal Medicine",
    designation: "MBBS (CMC), BCS (FP), FCPS (Final Part, Med), MRCP (UK). PGT in Pediatrics. Medical Officer, MCH Center, Lakshmipur.",
    hospital: "Sonaimuri Maa O Shishu Hospital",
    schedule: "Everyday | 10:00 AM - 8:00 PM",
    image: doctorAsad,
    experience: "8+ Years",
    gender: "Male",
    phone: "01705-319271",
    email: "dr.asaduzzaman@smosh.bd",
    bio: "Dr. Md. Asaduzzaman is a dedicated Internal Medicine specialist with extensive training in diagnosing and managing complex adult diseases. He also has special training in Pediatrics, making him a versatile physician for families.",
    treatments: [
      "Diabetes Management",
      "Fever & Infectious Diseases",
      "Gastrointestinal Issues",
      "General Adult Medicine"
    ],
    fees: {
      new: "600 TK",
      followUp: "400 TK"
    }
  },
  {
    id: 4,
    name: "Dr. Md. Saiful Islam",
    department: "Physical Medicine",
    designation: "MBBS, BCS (Health), MD (Physical Medicine & Rehab - BSMMU), FCPS (Medicine-part), CCD (BIRDEM). Consultant, Physical Medicine & Rehabilitation Dept., Noakhali.",
    hospital: "Sonaimuri Maa O Shishu Hospital",
    schedule: "Every Thursday | 2:00 PM - 8:00 PM",
    image: doctorSaiful,
    experience: "10+ Years",
    gender: "Male",
    phone: "01705-319271",
    email: "dr.saiful@smosh.bd",
    bio: "Dr. Saiful Islam focuses on restoring movement and reducing pain for patients suffering from injuries, arthritis, and neurological disorders. His holistic approach combines medical management with physical rehabilitation.",
    treatments: [
      "Stroke Rehabilitation",
      "Arthritis & Joint Pain Management",
      "Sports Injuries",
      "Nerve Pain (Sciatica) Treatment"
    ],
    fees: {
      new: "800 TK",
      followUp: "500 TK"
    }
  },
  {
    id: 5,
    name: "Dr. Khadija Akter Shuvo",
    department: "Gynecology & Sonology",
    designation: "MBBS (Khulna Medical College), CMU (Ultrasonography), PGT (Gynae). BM&DC: A-145671. Experienced in Mother & Child diseases. Specially trained in Normal Delivery.",
    hospital: "Sonaimuri Maa O Shishu Hospital",
    schedule: "Everyday | 10:00 AM - 8:00 PM",
    image: doctorKhadija,
    experience: "5+ Years",
    gender: "Female",
    phone: "01705-319271",
    email: "dr.khadija@smosh.bd",
    bio: "Dr. Khadija Akter Shuvo is a passionate Gynecologist and Sonologist. She is specially trained in conducting safe normal deliveries and provides expert ultrasound diagnostics to monitor fetal health and maternal well-being.",
    treatments: [
      "Normal Delivery Management",
      "Pregnancy Ultrasonography",
      "Antenatal & Postnatal Care",
      "PCOS & Hormonal Treatment"
    ],
    fees: {
      new: "500 TK",
      followUp: "400 TK"
    }
  },
  {
    id: 6,
    name: "Dr. Ahsan Habib (BPT)",
    department: "Physiotherapy",
    designation: "BPT. Physiotherapy Specialist (Arthritis, Pain & Paralysis). Consultant at Sonaimuri Maa O Shishu Hospital Physiotherapy Unit and other care centers.",
    hospital: "Sonaimuri Maa O Shishu Hospital",
    schedule: "Everyday | 10:00 AM - 8:00 PM",
    image: doctorAhsan,
    experience: "7+ Years",
    gender: "Male",
    phone: "01705-319271",
    email: "dr.ahsan@smosh.bd",
    bio: "Dr. Ahsan Habib is an expert Physiotherapist dedicated to helping patients recover from physical impairments. Whether dealing with chronic arthritis or post-accident paralysis, he provides hands-on therapy to restore mobility.",
    treatments: [
      "Paralysis & Neuro Rehab",
      "Back, Neck & Knee Pain",
      "Post-Operative Physiotherapy",
      "Manual Therapy & Exercise Prescriptions"
    ],
    fees: {
      new: "500 TK",
      followUp: "300 TK"
    }
  }
];