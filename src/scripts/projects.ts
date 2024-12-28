import inventoryKardexImg from 'assets/inventory-kardex_main.png'
import modernSnapgramImg from 'assets/modern-snapgram_explore.png'
import { TECHNOLOGIES } from 'scripts/technologies'
export const projects = [
  {
    name: 'Inventory Kardex control system',
    desc: 'Register your purchase, sale or refund movements, each movement generates an electronic sales slip or electronic credit note. Manage customers, suppliers, products and system users. Easily view your records.',
    tech: [
      TECHNOLOGIES.Java,
      TECHNOLOGIES.JavaSpring,
      TECHNOLOGIES.Typescript,
      TECHNOLOGIES.React,
      TECHNOLOGIES.TailwindCSS,
      TECHNOLOGIES.ShadCN
    ],
    github: 'https://github.com/Flavio-Ore/Tienda-Don-Doug-Dimmadome',
    demo: 'https://tienda-don-doug-dimmadome.vercel.app/',
    img: inventoryKardexImg,
    imgAlt: 'Inventory Kardex control system, screenshot'
  },
  {
    name: 'Modern Snapgram',
    desc: 'Social media app, you can create, edit and delete your users and posts. You can chat and follow other users and like or save their posts. The design was made in Figma and use Appwrite as backend (BaaS).',
    tech: [
      TECHNOLOGIES.Appwrite,
      TECHNOLOGIES.Typescript,
      TECHNOLOGIES.React,
      TECHNOLOGIES.TailwindCSS,
      TECHNOLOGIES.ShadCN
    ],
    github: 'https://github.com/Flavio-Ore/modern-snapgram',
    demo: 'https://modern-snapgram.vercel.app/',
    img: modernSnapgramImg,
    imgAlt: 'Modern Snapgram, screenshot'
  }
]
