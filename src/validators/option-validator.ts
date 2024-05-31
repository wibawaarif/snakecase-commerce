// bg-blue-950 border-blue-950
// bg-rose-950 border-rose-950
// bg-cyan-950 border-cyan-950
// bg-pink-800 border-pink-800
// bg-zinc-900 border-zinc-900
// bg-yellow-500 border-yellow-500

import { PRODUCT_PRICES } from "@/config/products";

export const COLORS = [
  { label: "Black", value: "black", tw: "zinc-900" },
  { label: "Pink", value: "pink", tw: "pink-800" },
  { label: "Cyan", value: "cyan", tw: "cyan-950" },
  { label: "Blue", value: "blue", tw: "blue-950" },
  { label: "Rose", value: "rose", tw: "rose-950" },
  { label: "Yellow", value: "yellow", tw: "yellow-500" },
] as const;

export const MODELS = {
   name: "models", options: [
    {
      label: "iPhone 11",
      value: "iphone11"
    },
    {
      label: "iPhone 12",
      value: "iphone12"
    },
    {
      label: "iPhone 13",
      value: "iphone13"
    },
    {
      label: "iPhone 14",
      value: "iphone14"
    },
    {
      label: "iPhone 15",
      value: "iphone15"
    }
  ] ,
 } as const;

 export const MATERIALS = {
  name: "material", options: [
   {
     label: "Polycarbonate",
     value: "polycarbonate",
     description: "Scratch-resistant coating",
     price: PRODUCT_PRICES.material.polycarbonate
   },
   {
     label: "Ceramic",
     value: "ceramic",
     description: "Fancy look, but not as strong as Polycarbonate.",
     price: PRODUCT_PRICES.material.ceramic
   },

 ] ,
} as const;

 export const FINISHES = {
  name: "finish", options: [
   {
     label: "Smooth Finish",
     value: "smooth",
     description: undefined,
     price: PRODUCT_PRICES.finish.smooth
   },
   {
     label: "Textured Finish",
     value: "textured",
     description: "Soft grippy texture",
     price: PRODUCT_PRICES.finish.textured
   },
   {
     label: "Matte Finish",
     value: "matte",
     description: "Elegant look",
     price: PRODUCT_PRICES.finish.matte
   },
 ] ,
} as const;
