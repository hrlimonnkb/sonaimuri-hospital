import EssentialNutrition from "@/assets/images/Essential_Nutrition.jpeg";
import newbornSleep from "@/assets/images/Newborn_sleep_patterns.jpeg";
import childhoodVaccinations from "@/assets/images/Timely_childhood_vaccination.jpeg";

export const blogsData = [
  {
    id: 1,
    title: "Essential Nutrition for Expectant Mothers: A Complete Guide",
    excerpt: "Discover the vital vitamins and minerals needed during pregnancy to ensure the healthy development of your baby and your own well-being.",
    category: "Maternity",
    date: "April 12, 2026",
    readTime: "5 Min Read",
    author: "Dr. Toufika Ahmed",
    image: EssentialNutrition,
    slug: "essential-nutrition-expectant-mothers", 
    tags: ["Pregnancy", "Diet", "Maternal Care", "Vitamins"],
    content: [
      {
        id: "introduction",
        heading: "1. Introduction",
        body: "Proper nutrition during pregnancy is a crucial component of maternal and fetal health, yet it is often misunderstood. The added physical demands of carrying a child mean your body requires more macro and micronutrients than ever before. In this guide, we will explore the essential vitamins you need and share practical tips for maintaining a balanced diet."
      },
      {
        id: "folic-acid",
        heading: "2. The Importance of Folic Acid",
        body: "Folic acid is arguably the most critical nutrient during the first trimester. It helps form the neural tube and prevents major birth defects of the baby's brain and spine. Expectant mothers should aim for at least 400 to 800 micrograms daily, which can be found in fortified cereals, dark leafy greens, and citrus fruits."
      },
      {
        id: "iron-calcium",
        heading: "3. Balancing Iron and Calcium",
        body: "Your body needs double the amount of iron during pregnancy to supply oxygen to your baby. Combine iron-rich foods like lean meats and beans with Vitamin C for better absorption. Simultaneously, calcium is vital for your baby's bone development. If you don't consume enough calcium, your body will take it from your own bones!"
      },
      {
        id: "conclusion",
        heading: "4. Conclusion",
        body: "Maintaining a healthy diet doesn't have to be overwhelming. Focus on whole foods, stay hydrated, and always consult with your gynecologist before starting any new supplements. Your health is the foundation of your baby's future."
      }
    ]
  },
  {
    id: 2,
    title: "Understanding Newborn Sleep Patterns: What Parents Should Know",
    excerpt: "Newborns have erratic sleep schedules. Learn how to establish a healthy sleep routine for your baby and get some much-needed rest yourself.",
    category: "Pediatrics",
    date: "April 05, 2026",
    readTime: "4 Min Read",
    author: "Dr. A K M Golam Samdani",
    image: newbornSleep,
    slug: "understanding-newborn-sleep",
    tags: ["Sleep", "Newborns", "Parenting", "Pediatrics"],
    content: [
      {
        id: "intro-sleep",
        heading: "1. The Reality of Newborn Sleep",
        body: "One of the biggest adjustments for new parents is the erratic sleep schedule of a newborn. Unlike adults, babies are not born with a circadian rhythm. They sleep in short bursts around the clock, waking frequently to feed. Understanding what is normal can help reduce anxiety and frustration."
      },
      {
        id: "sleep-cycles",
        heading: "2. How Infant Sleep Cycles Work",
        body: "A newborn's sleep cycle is much shorter than an adult's, typically lasting only 45 to 60 minutes. They also spend a larger percentage of their sleep in REM (Rapid Eye Movement) sleep. This active sleep phase is essential for their rapid brain development, but it also means they wake up much more easily."
      },
      {
        id: "creating-routine",
        heading: "3. Creating a Bedtime Routine",
        body: "While you can't put a newborn on a strict schedule, you can start laying the groundwork for healthy sleep habits. Dimming the lights in the evening, giving a warm bath, and keeping nighttime feedings quiet and strictly business can help teach your baby the difference between day and night."
      },
      {
        id: "safe-sleep",
        heading: "4. Safe Sleep Practices",
        body: "Always remember the ABCs of safe sleep: Alone, on their Back, in a bare Crib. Keep blankets, pillows, and stuffed animals out of the sleeping area to reduce the risk of SIDS (Sudden Infant Death Syndrome)."
      }
    ]
  },
  {
    id: 3,
    title: "The Importance of Timely Childhood Vaccinations",
    excerpt: "Vaccinations are crucial for protecting your child from severe diseases. Here is the complete immunization schedule recommended by specialists.",
    category: "Child Health",
    date: "March 28, 2026",
    readTime: "6 Min Read",
    author: "Admin",
    image: childhoodVaccinations,
    slug: "importance-of-childhood-vaccinations",
    tags: ["Vaccination", "Immunity", "Infant Health", "Prevention"],
    content: [
      {
        id: "vaccine-intro",
        heading: "1. Shielding Your Child's Future",
        body: "Vaccinations are one of the greatest public health achievements in human history. By vaccinating your child on time, you are protecting them from potentially life-threatening diseases like measles, polio, and whooping cough before they are exposed to them."
      },
      {
        id: "how-they-work",
        heading: "2. How Vaccines Build Immunity",
        body: "Vaccines work by safely introducing a tiny, weakened, or dead piece of a germ to your child's immune system. This trains their body to produce antibodies. If they ever encounter the real disease later in life, their immune system will immediately recognize and destroy it."
      },
      {
        id: "community-immunity",
        heading: "3. Herd Immunity",
        body: "When you vaccinate your child, you aren't just protecting them; you are protecting the community. Herd immunity occurs when a large portion of a community becomes immune to a disease, making the spread of the disease from person to person unlikely. This protects vulnerable individuals who cannot be vaccinated, such as newborns or those with compromised immune systems."
      },
      {
        id: "side-effects",
        heading: "4. Managing Mild Side Effects",
        body: "It is normal for children to experience mild side effects after a vaccination, such as a slight fever or soreness at the injection site. These are signs that the body is building immunity. Applying a cool cloth and offering plenty of fluids can help soothe your child."
      }
    ]
  }
];