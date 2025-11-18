export default function Table({ headers = [], data = [] }) {
  return (
    <div className="overflow-x-auto">

      <table className="w-full text-right">
        
        <thead>
          <tr className="bg-gray-100 text-sm text-gray-600">
            {headers.map((h, i) => (
              <th key={i} className="py-3 px-4 font-medium">{h}</th>
            ))}
          </tr>
        </thead>

        <tbody className="text-sm">
          {data.map((row, r) => (
            <tr
              key={r}
              className="border-b last:border-none hover:bg-gray-50 transition"
            >
              {row.map((cell, c) => (
                <td key={c} className="py-3 px-4">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}
