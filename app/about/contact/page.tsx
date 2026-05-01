export default function ContactPage() {
  return (
    <main className="font-primary text-[#1E1E1E] px-5 text-2xl font-normal pt-5">
      <p className="text-sm font-medium">WAYS TO REACH US</p>
      <h1 className="font-secondary text-[2.5rem] my-5">Contact</h1>
      <ul className="flex flex-col gap-2 border-b-1 border-b-[#DDDDDD] pb-5">
        <li>Book suggestions: Tell us what we should add to the shelf.</li>
        <li>Corrections: Spotted an error? Let us know so we can fix it.</li>
        <li>Careers: Interested in joining Tiny Library? Send a short note and we'll get back to you.</li>
      </ul>
      <p className="mt-5 mb-15">Email: danieelgohh@gmail.com</p>
      <p>We're a small team, so we don't list a phone number-email is best.</p>
    </main>
  )
}