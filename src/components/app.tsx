const contacts = [
  {
    _id: "607cf129311fcb0015dd6e89",
    first_name: "Yukihiro",
    last_name: "Matsumoto Fumbwa",
    email: "Matsumoto@gmail.com",
    phone_number: "+243811609403",
    position: "Teacher and Software Engineer",
    work_address: "Tokyo",
  },
  {
    _id: "607cf19e311fcb0015dd6e8b",
    first_name: "Linus",
    last_name: "Torvalds",
    email: "linux@gmail.com",
    phone_number: "+33878578477",
    position: "Software Engineer",
    work_address: "Helsinki",
  },
  {
    _id: "6091374a5516790015430f3a",
    first_name: "Vance",
    last_name: "Carney",
    email: "zygave@mailinator.com",
    phone_number: "+243818636535",
    position: "Sint voluptatem dist",
    work_address: "Veniam eaque offici",
  },
  {
    _id: "60914868c3c58500158f9927",
    first_name: "Zelda",
    last_name: "Wolf",
    email: "ziky@mailinator.com",
    phone_number: "+243819621840",
    position: "Aliquam deserunt pra",
    work_address: "Debitis dolorem dolo",
  },
  {
    _id: "6091487dc3c58500158f9928",
    first_name: "Thomas",
    last_name: "Kim",
    email: "geron@mailinator.com",
    phone_number: "+243810884055",
    position: "Adipisci deserunt ar",
    work_address: "Minima enim dolore i",
  },
];

const App = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Email</th>
          <th>Poste</th>
          <th>Numéro de téléphone</th>
        </tr>
      </thead>
      <tbody>
        {/* Expliquer code ES6 */}
        {contacts.map((contact) => (
          <tr>
            <td>{contact.last_name}</td>
            <td>{contact.first_name}</td>
            <td>{contact.email}</td>
            <td>{contact.position}</td>
            <td>{contact.phone_number}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default App;
