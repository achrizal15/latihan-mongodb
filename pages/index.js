
const url = "http://localhost:3000/api/pemasukan/";
export default function Home(data) {
  let pemasukan = data.data
  const handleClick = async (id) => {
    let pems = await fetch(url + id, { method: "DELETE" });
    let result = await pems.json()
    console.log(result.response);
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = event.target.nama.value;
    try {
      const tambah = await fetch(url, {
        method: "POST", body: JSON.stringify({ nama: data }), headers: {
          'Content-Type': 'application/json'
        },
      })
      console.log(tambah);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      {pemasukan.map((v, k) => {
        return (<div key={k + 1}><button onClick={()=> handleClick(v._id)} className='bg-sky-500 px-3 py-2 rounded-full m-2 text-white'>{v.nama}</button></div>)
      })}
      <form method='POST' id='formadd' onSubmit={handleSubmit}>
        <input name='nama' type="text" />
        <button type='submit' >SUBMIT</button>
      </form>
    </div>
  )
}
export async function getServerSideProps(context) {
  const res = await fetch(url, {
    method: "GET"
  });
  const data = await res.json()
  return {
    props: { data }, // will be passed to the page component as props
  }
}