import React, { useState } from "react";
import slipper from "./assets/slipper.jpg";
import sportShoe from "./assets/sport-shoe.jpg";
import sleeper from "./assets/sleeper.jpg";
import avaRover from "./assets/ava-rover.jpg";
import neuro from "./assets/neuro.jpg";

import {
  Search,
  ShoppingBag,
  UserCircle,
  Trash2,
  Plus,
  Minus,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";


const IMG = {

  slipper: slipper,
  sportShoe: sportShoe,
  sleeper: sleeper,
  avaRover: avaRover,
  neuro: neuro,
 

};

const initialCart = [
  { id: 1, name: "Comfort slipper", color: "Black", size: "43", price: 20, quantity: 1, image: IMG.slipper },
  { id: 2, name: "Jumping sports shoe", color: "Gray", size: "42", price: 35, quantity: 1, image: IMG.sportShoe },
  { id: 3, name: "Monsoon belt sleeper", color: "Black", size: "43", price: 25, quantity: 1, image: IMG.sleeper },
];

const popularProducts = [
  { id: 1, name: "Everyday Use", price: 25, image: IMG.slipper },
  { id: 2, name: "Nike Run 4 GORE-TEX", price: 40, image: IMG.sportShoe },
  { id: 3, name: "Nike Ava Rover", price: 30, image: IMG.avaRover },
  { id: 4, name: "Neuroscience footwear", price: 25, image: IMG.neuro },
  
];

const navLinks = ["New", "Category", "Men", "Women", "Brands", "Contact"];


const CUTOUT = false;
function App() {
  const [cart, setCart] = useState(initialCart);

  const increaseQuantity = (id) =>
    setCart((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

  const decreaseQuantity = (id) =>
    setCart((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );

  const removeItem = (id) =>
    setCart((items) => items.filter((item) => item.id !== id));

  const subtotal = cart.reduce((t, i) => t + i.price * i.quantity, 0);
  const delivery = cart.length > 0 ? 2 : 0;
  const discount = 0;
  const total = subtotal + delivery - discount;
  const itemCount = cart.reduce((t, i) => t + i.quantity, 0);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#efefef] text-black">
      {/* NAVBAR */}
      <header className="mx-auto flex max-w-276 items-center justify-between px-5 py-8 lg:px-0">
        <div className="flex items-center gap-2 md:gap-24">
          <div className="flex items-center gap-1.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
              R
            </div>
            <span className="text-[13px] font-semibold">Shop</span>
          </div>

          <nav className="hidden items-center gap-8 text-[13px] md:flex">
            {navLinks.map((link) => (
              <a key={link} href="#" className="hover:opacity-60">
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <Search size={18} strokeWidth={1.6} />

          <div className="relative">
            <ShoppingBag size={18} strokeWidth={1.6} />
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[9px] text-white">
                {itemCount}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <UserCircle size={20} strokeWidth={1.5} />
            <span className="hidden text-[12px] md:block">Leslie Alexander</span>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto max-w-276 px-5 pb-12 lg:px-0">
        <section className="mt-8 grid gap-12 lg:grid-cols-[560px_450px] lg:justify-between">
          {/* CART */}
          <div>
            <h1 className="mb-8 text-[32px] font-normal tracking-tight">
              Shopping Cart ({itemCount} {itemCount === 1 ? "item" : "items"})
            </h1>

            {cart.length === 0 ? (
              <div className="rounded-xl bg-white p-10 text-center">
                <ShoppingBag size={45} className="mx-auto mb-4 opacity-30" />
                <h2 className="text-xl font-medium">Your cart is empty</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Add some products to your shopping cart.
                </p>
              </div>
            ) : (
              <div>
                {cart.map((item, index) => (
                  <div
                    key={item.id}
                    className={`flex items-stretch justify-between py-5 ${
                      index !== cart.length - 1 ? "border-b border-gray-300" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-22.5 w-22.5 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
                        <img
                          src={item.image}
                          alt={item.name}
                          className={
                            CUTOUT
                              ? "h-17.5 w-17.5 object-contain mix-blend-multiply"
                              : "h-full w-full object-cover"
                          }
                        />
                      </div>

                      <div className="flex h-21 flex-col justify-between">
                        <div>
                          <h3 className="text-[16px] font-medium leading-tight">
                            {item.name}
                          </h3>
                          <p className="mt-1.5 text-[11px] leading-snug text-gray-500">
                            Color: {item.color}
                          </p>
                          <p className="text-[11px] leading-snug text-gray-500">
                            Size: {item.size}”
                          </p>
                        </div>
                        <p className="text-[15px] font-medium leading-none">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end justify-between py-1">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="hover:text-red-500"
                        aria-label="Remove item"
                      >
                        <Trash2 size={17} strokeWidth={1.5} />
                      </button>

                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="hover:opacity-50"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={15} strokeWidth={1.5} />
                        </button>
                        <span className="text-[13px]">{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="hover:opacity-50"
                          aria-label="Increase quantity"
                        >
                          <Plus size={15} strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ORDER SUMMARY */}
          <div>
            <h2 className="mb-8 text-[32px] font-normal tracking-tight">
              Order Summary
            </h2>

            <div className="rounded-lg bg-black p-5 text-white">
              <div className="space-y-4 text-[11px]">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span className="text-[15px]">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Delivery</span>
                  <span className="text-[15px]">${delivery.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Discount</span>
                  <span className="text-[15px]">
                    ${discount.toFixed(2).padStart(5, "0")}
                  </span>
                </div>
              </div>

              <div className="my-4 border-t border-gray-700" />

              <div className="flex items-center justify-between">
                <span className="text-[24px]">Total</span>
                <span className="text-[24px]">${total.toFixed(2)}</span>
              </div>

              <button className="mt-7 w-full rounded-full bg-[#ffe94d] py-3.5 text-[13px] font-medium text-black transition hover:bg-yellow-300">
                Checkout
              </button>

              <div className="mt-3 rounded-lg bg-[#171717] px-4">
                <div className="flex items-center gap-3 border-b border-neutral-800 py-3.5">
                  <ShieldCheck size={18} strokeWidth={1.5} />
                  <span className="text-[13px]">Secure checkout</span>
                </div>
                <div className="flex items-center gap-3 border-b border-neutral-800 py-3.5">
                  <Truck size={18} strokeWidth={1.5} />
                  <span className="text-[13px]">Less shipping cost</span>
                </div>
                <div className="flex items-center gap-3 py-3.5">
                  <RotateCcw size={18} strokeWidth={1.5} />
                  <span className="text-[13px]">Easy return system</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MOST POPULAR */}
        <section className="mt-12 lg:-mx-3">
          <div className="mb-5 flex items-center justify-between lg:mx-3">
            <h2 className="text-[26px] font-normal tracking-tight">
              Most Popular
            </h2>
            <button className="text-[12px] underline underline-offset-4">
              See all
            </button>
          </div>

          <div className="scrollbar-hide flex gap-6 overflow-x-auto pb-3">
            {popularProducts.map((product) =>
              CUTOUT ? (
                <div
                  key={product.id}
                  className="flex h-58.75 w-58.75 shrink-0 flex-col items-center justify-end rounded-full bg-white pb-6"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="mb-3 h-27.5 w-37.5 object-contain mix-blend-multiply"
                  />
                  <p className="text-[12px] text-neutral-700">{product.name}</p>
                  <p className="mt-0.5 text-[17px]">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              ) : (
                <div key={product.id} className="w-58.75 shrink-0 text-center">
                  <div className="h-58.75 w-58.75 overflow-hidden rounded-full bg-white shadow-sm">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-500 hover:scale-110"
                    />
                  </div>
                  <p className="mt-3 text-[13px] text-neutral-700">
                    {product.name}
                  </p>
                  <p className="mt-0.5 text-[17px]">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              )
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;