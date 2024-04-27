const ToolList = ({ className }: any) => {
  return (
    <div className={`${className} px-5 py-7 flex flex-col`}>
      <div className="">
        <h1>My Tools</h1>
      </div>
      <div>
        <table className="table-fixed border-collapse border rounded-e-md border-primary-light text-left">
          <thead>
            <tr>
              <th className="px-2 py-2 bg-primary-100 border border-primary-light">Song</th>
              <th className="px-2 py-2 bg-primary-100 border border-primary-light">Artist</th>
              <th className="px-2 py-2 bg-primary-100 border border-primary-light">Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-2 py-2 bg-primary-100 border border-primary-light">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td className="px-2 py-2 bg-primary-100 border border-primary-light">Malcolm Lockyer</td>
              <td className="px-2 py-2 bg-primary-100 border border-primary-light">1961</td>
            </tr>
            <tr>
              <td className="px-2 py-2 bg-primary-100 border border-primary-light">Witchy Woman</td>
              <td className="px-2 py-2 bg-primary-100 border border-primary-light">The Eagles</td>
              <td className="px-2 py-2 bg-primary-100 border border-primary-light">1972</td>
            </tr>
            <tr>
              <td className="px-2 py-2 bg-primary-100 border border-primary-light">Shining Star</td>
              <td className="px-2 py-2 bg-primary-100 border border-primary-light">Earth, Wind, and Fire</td>
              <td className="px-2 py-2 bg-primary-100 border border-primary-light">1975</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToolList;
