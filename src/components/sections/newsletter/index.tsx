import { Section } from "@/components/ui/section"
import { Form } from "./form"

export const Newsletter = () => {
  return (
    <Section sectionId="newsletter">
      <div className="container">
        <div className="w-full h-full min-h-[750px] flex flex-col justify-center items-center max-sm:min-h-[600px]">
          <h2 className="flex flex-col justify-center items-center text-[56px] text-center font-bold max-sm:text-[40px]">
            Subscribe to <span>Our Newsletter</span>
          </h2>
          <p className="mt-4 leading-[1.4] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Form />
        </div>
      </div>
      <div></div>
    </Section>
  )
}
