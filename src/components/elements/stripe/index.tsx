import { StripeLine } from "./stripeLine"
import { StripeText } from "./stripeText"

export const Stripe = () => {
  return (
    <div className="h-[300px] -mt-[50px]">
      <div>
        <div className="w-full h-[80px] relative">
          <div className="w-full absolute z-[2] rotate-[4deg] max-sm:rotate-[8deg ]">
            <StripeLine backgroundColor="#388BFF" velocity={3}>
              <StripeText color="var(--color-bg)" length={10} />
            </StripeLine>
          </div>

          <div className="w-full absolute z-[1] -rotate-[4deg] max-sm:-rotate-[8deg]">
            <StripeLine backgroundColor="var(--color-primary)" velocity={-3}>
              <StripeText color="var(--color-text)" length={10} />
            </StripeLine>
          </div>
        </div>
      </div>
    </div>
  )
}
