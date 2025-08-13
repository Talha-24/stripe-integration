import { loadStripe } from "@stripe/stripe-js";

interface STRIPEPRODUCTS{
    price:string,
    quantity:number,
}
export async function checkout(lineItems:STRIPEPRODUCTS[]) {
    let stripepromise: any | string | null  = null;
    // GETTING STRIPE PROMISE
    
    const getStripe = () => {
        if (!stripepromise) {
            stripepromise = loadStripe(process.env.NODE_PUBLIC_API_KEY as string);
        }
        return stripepromise;
    }
      
    const stripe=await getStripe();
    await stripe.redirectToCheckout({
        mode: "payment",
        lineItems,
        successURL: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
        cancelURL: window.location.origin,
    })

}