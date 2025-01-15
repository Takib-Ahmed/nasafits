import React from 'react';

export function SizeGuide() {
  const sizes = [
    { size: 'M', chest: '27"', length: '38"' },
    { size: 'L', chest: '28"', length: '40"' },
    { size: 'XL', chest: '29"', length: '42"' },
  ];

  return (
    <div className="border p-4  mx-auto text-center  ">
      <h2 className="text-lg font-bold mb-2">Size Guide</h2>
      <table className="w-full border-collapse items-center text-center">
        <thead>
          <tr>
            <th className="border-b pb-2">Size</th>
            <th className="border-b pb-2">Chest</th>
            <th className="border-b pb-2">Length</th>
          </tr>
        </thead>
        <tbody>
          {sizes.map((item) => (
            <tr key={item.size}>
              <td className="py-2">{item.size}</td>
              <td className="py-2">{item.chest}</td>
              <td className="py-2">{item.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SizeGuide;
