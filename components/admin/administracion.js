import Form from "./form";
import NavAdmin from "./nav-admin";

function Admin() {
  return (
    <main className="bg-gray-300 h-full xl:h-screen flex flex-row justify-between">
      <NavAdmin className='basis-1/8' />
      <Form className='basis-5/6' />
    </main>
  );
}

export default Admin;
