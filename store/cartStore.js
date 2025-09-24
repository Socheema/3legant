import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist((set, get) => ({
    cart: [],

    addToCart: (product, qty = 1) => {
      set((state) => {
        const existing = state.cart.find((item) => item.id === product.id);
        if (existing) {
          return {
            cart: state.cart.map((i) =>
              i.id === product.id ? { ...i, quantity: i.quantity + qty } : i
            ),
          };
        }
        return {
          cart: [
            ...state.cart,
            {
              id: product.id,
              title: product.title,
              price: Number(product.price),
              image: product.image,
              quantity: qty,
            },
          ],
        };
      });
    },
    removeFromCart: (id) => {
      set((state) => ({ cart: state.cart.filter((i) => i.id !== id) }));
    },
     decreaseQuantity: (productId) => {
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0), // auto-remove if it hits 0
    }));
  },
    updateQuantity: (productId, newQuantity) => {
    if (newQuantity <= 0) {
      // Remove item if quantity is set to 0
      set((state) => ({
        cart: state.cart.filter((item) => item.id !== productId),
      }));
    } else {
      set((state) => ({
        cart: state.cart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        ),
      }));
    }
  },
    clearCart: () => set({ cart: [] }),
    getTotal: () =>
      get().cart.reduce((sum, i) => sum + i.price * i.quantity, 0),
    getItemCount: () => get().cart.reduce((sum, i) => sum + i.quantity, 0),
  })),
  {
    name: "cart-storage",
    partialize: (state) => ({ cart: state.cart }),
  }
);

export default useCartStore;
