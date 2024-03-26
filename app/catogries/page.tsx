import Header from "@/components/header";

export default function CatogriesPage() {
  return (
    <div>
      <Header />
      <section className="flex flex-col items-center justify-center">
        <div className="w-2/5 border-2 my-12 rounded-2xl p-8">
          <h1 className="text-center text-2xl">Please Mark Your Interest!</h1>
          <h1 className="text-center text-sm mb-6">
            We will keep you notified!
          </h1>
          <div className="flex flex-col">
            <div className="ml-6">
              <input type="checkbox" />
              <label className="ml-4 text-zinc-800">Shoes</label>
            </div>
            <div className="ml-6">
              <input type="checkbox" />
              <label className="ml-4 text-zinc-800">Women T-shirt</label>
            </div>
            <div className="ml-6">
              <input type="checkbox" />
              <label className="ml-4 text-zinc-800">Men T-shirt</label>
            </div>
            <div className="ml-6">
              <input type="checkbox" />
              <label className="ml-4 text-zinc-800">Makeup</label>
            </div>
            <div className="ml-6">
              <input type="checkbox" />
              <label className="ml-4 text-zinc-800">Jewellery</label>
            </div>
            <div className="ml-6">
              <input type="checkbox" />
              <label className="ml-4 text-zinc-800">Furniture</label>
            </div>
          </div>
        </div>
        <div className="bg-zinc-100 p-4 rounded-xl font-light">
        Navigate to the landing page by selecting <span className="font-semibold">'Logout'</span> from the top-right corner.
        </div>
      </section>
    </div>
  );
}
