export default function Component() {
  return (
    <div className="flex justify-center py-8 px-4 md:px-0">
      <div className="w-full space-y-12 md:space-y-24 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-3 lg:col-span-2">
          <h6 className="text-xs uppercase text-gray-500">Small title</h6>
          <h1 className="text-4xl font-bold">Title</h1>
          <p className="text-sm text-gray-500">description</p>
          <div className="mt-4 space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-300 w-24 h-24" />
              <div className="bg-gray-300 w-24 h-24" />
              <div className="bg-gray-300 w-24 h-24" />
            </div>
            <p className="text-sm font-semibold">A</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-300 w-24 h-24" />
              <div className="bg-gray-300 w-24 h-24" />
              <div className="bg-gray-300 w-24 h-24" />
            </div>
            <p className="text-sm font-semibold">B</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-300 w-24 h-24" />
              <div className="bg-gray-300 w-24 h-24" />
              <div className="bg-gray-300 w-24 h-24" />
            </div>
            <p className="text-sm font-semibold">C</p>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-2">
          <img
            src="/images/media/model_preview.png"
            alt="Image"
            width={450}
            height={600}
            className="w-full h-[600px] object-cover"
          />

          {/* <div
            className={`round-bg d-flex align-items-center justify-content-center`}
            style={{ width: "499px", height: "631px" }}
          >
            <img
              src={"/images/media/model_preview.png"}
              alt={`model`}
              className="lazy-img"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
