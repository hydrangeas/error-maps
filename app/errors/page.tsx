export default function Errors() {
  return (
    <main className="pt-6 px-8">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <table className="min-w-full text-center">
            <thead className="border-b font-medium dark:border-neutral-500">
              <tr>
                <th scope="col" className="px-6 py-2">
                  Date
                </th>
                <th scope="col" className="px-6 py-2">
                  Priority
                </th>
                <th scope="col" className="px-6 py-2">
                  Code
                </th>
                <th scope="col" className="px-6 py-2">
                  Message
                </th>
                <th scope="col" className="px-6 py-2">
                  Model
                </th>
                <th scope="col" className="px-6 py-2"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-6 py-2">
                  2023-12-31T12:34:56+09:00
                </td>
                <td className="whitespace-nowrap px-6 py-2">Service Call</td>
                <td className="whitespace-nowrap px-6 py-2">101F-0000</td>
                <td className="whitespace-nowrap px-6 py-2">
                  #10 bur is broken.
                </td>
                <td className="whitespace-nowrap px-6 py-2">DWX-52D_XMD0004</td>
                <td className="whitespace-nowrap px-6 py-2">View</td>
              </tr>
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-6 py-2">
                  2023-12-31T12:34:56+09:00
                </td>
                <td className="whitespace-nowrap px-6 py-2">Service Call</td>
                <td className="whitespace-nowrap px-6 py-2">101F-0000</td>
                <td className="whitespace-nowrap px-6 py-2">
                  #10 bur is broken.
                </td>
                <td className="whitespace-nowrap px-6 py-2">DWX-52D_XMD0004</td>
                <td className="whitespace-nowrap px-6 py-2">View</td>
              </tr>
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-6 py-2">
                  2023-12-31T12:34:56+09:00
                </td>
                <td className="whitespace-nowrap px-6 py-2">Service Call</td>
                <td className="whitespace-nowrap px-6 py-2">101F-0000</td>
                <td className="whitespace-nowrap px-6 py-2">
                  #10 bur is broken.
                </td>
                <td className="whitespace-nowrap px-6 py-2">DWX-52D_XMD0004</td>
                <td className="whitespace-nowrap px-6 py-2">View</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
