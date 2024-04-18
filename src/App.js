// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       editingId: null,
//       newEntry: { id: '', firstName: '', lastName: '', phone: '', email: '', file: null, fileUrl: null }
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleFileChange = this.handleFileChange.bind(this);
//     this.handleAdd = this.handleAdd.bind(this);
//     this.handleDelete = this.handleDelete.bind(this);
//     this.handleEdit = this.handleEdit.bind(this);
//     this.handleSave = this.handleSave.bind(this);
//   }

//   handleFileChange(event, id) {
//     const file = event.target.files[0];
//     if (file) {
//       const fileUrl = URL.createObjectURL(file);
//       this.setState(prevState => ({
//         newEntry: { ...prevState.newEntry, file: file, fileUrl: fileUrl }
//       }));
//     }
//   }

//   handleInputChange(event, id) {
//     const { name, value } = event.target;
//     // Validate if input contains only alphabetic characters for name and last name
//     if (name === 'firstName' || name === 'lastName') {
//       const onlyAlphabets = /^[A-Za-z]+$/;
//       if ((value === '' || onlyAlphabets.test(value)) && value.length <= 15) {
//         if (id) {
//           this.setState(prevState => ({
//             data: prevState.data.map(employee => employee.id === id ? { ...employee, [name]: value } : employee)
//           }));
//         } else {
//           this.setState(prevState => ({
//             newEntry: { ...prevState.newEntry, [name]: value }
//           }));
//         }
//       }
//     } else if (name === 'phone') { // Validate if input contains only numeric characters for phone
//       const onlyNumbers = /^[0-9]*$/;
//       if ((value === '' || onlyNumbers.test(value)) && value.length <= 14) {
//         if (id) {
//           this.setState(prevState => ({
//             data: prevState.data.map(employee => employee.id === id ? { ...employee, [name]: value } : employee)
//           }));
//         } else {
//           this.setState(prevState => ({
//             newEntry: { ...prevState.newEntry, [name]: value }
//           }));
//         }
//       }
//     } else {
//       // For other fields, perform regular updating
//       if (id) {
//         this.setState(prevState => ({
//           data: prevState.data.map(employee => employee.id === id ? { ...employee, [name]: value } : employee)
//         }));
//       } else {
//         this.setState(prevState => ({
//           newEntry: { ...prevState.newEntry, [name]: value }
//         }));
//       }
//     }
//   }

//   handleAdd() {
//     const { data, newEntry } = this.state;
//     const id = data.length + 1;
//     this.setState({
//       data: [...data, newEntry],
//       newEntry: { id: '', firstName: '', lastName: '', phone: '', email: '', file: null, fileUrl: null }
//     });
//   }

//   handleDelete(id) {
//     this.setState(prevState => ({
//       data: prevState.data.filter(employee => employee.id !== id)
//     }));
//   }

//   handleEdit(id) {
//     this.setState({ editingId: id });
//   }

//   handleSave() {
//     this.setState({ editingId: null });
//   }

//   render() {
//     const { data, editingId, newEntry } = this.state;
//     return (
//       <div className="App">
//         <h1>Employee Data</h1>
//         <table>
//           <thead>
//             <tr>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Phone</th>
//               <th>Email</th>
//               <th>Choose File</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((employee) => (
//               <tr key={employee.id}>
//                 <td>{editingId === employee.id ?
//                   <input type="text" name="firstName" value={employee.firstName} onChange={(event) => this.handleInputChange(event, employee.id)} maxLength="15" /> :
//                   employee.firstName}</td>
//                 <td>{editingId === employee.id ?
//                   <input type="text" name="lastName" value={employee.lastName} onChange={(event) => this.handleInputChange(event, employee.id)} maxLength="15" /> :
//                   employee.lastName}</td>
//                 <td>{editingId === employee.id ?
//                   <input type="text" name="phone" value={employee.phone} onChange={(event) => this.handleInputChange(event, employee.id)} maxLength="14" /> :
//                   employee.phone}</td>
//                 <td>{editingId === employee.id ?
//                   <input type="email" name="email" value={employee.email} onChange={(event) => this.handleInputChange(event, employee.id)} /> :
//                   employee.email}</td>
//                 <td>
//                   {employee.fileUrl ? <img src={employee.fileUrl} alt="" style={{ width: '50px', height: '50px' }} /> : ""}
//                 </td>
//                 <td>
//                   {editingId === employee.id ? (
//                     <>
//                       <button onClick={() => this.handleSave()}>Save</button>
//                       <button onClick={() => this.handleEdit(null)}>Cancel</button>
//                     </>
//                   ) : (
//                     <>
//                       <button onClick={() => this.handleEdit(employee.id)}>Edit</button>
//                       <button onClick={() => this.handleDelete(employee.id)}>Delete</button>
//                     </>
//                   )}
//                 </td>
//               </tr>
//             ))}
//             <tr>
//               <td><input type="text" name="firstName" value={newEntry.firstName} onChange={(event) => this.handleInputChange(event)} maxLength="15" /></td>
//               <td><input type="text" name="lastName" value={newEntry.lastName} onChange={(event) => this.handleInputChange(event)} maxLength="15" /></td>
//               <td><input type="text" name="phone" value={newEntry.phone} onChange={(event) => this.handleInputChange(event)} maxLength="14" /></td>
//               <td><input type="email" name="email" value={newEntry.email} onChange={(event) => this.handleInputChange(event)} /></td>
//               <td>
//                 <input type="file" onChange={(event) => this.handleFileChange(event)} />
//                 {newEntry.fileUrl ? <img src={newEntry.fileUrl} alt="" style={{ width: '50px', height: '50px' }} /> : ""}
//               </td>
//               <td><button onClick={() => this.handleAdd()} disabled={!(newEntry.firstName && newEntry.lastName && newEntry.phone && newEntry.email && newEntry.file)}>Add</button></td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// export default App;



























import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      editingId: null,
      newEntry: { id: '', firstName: '', lastName: '', phone: '', email: '', file: null, fileUrl: null }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleFileChange(event, id) {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      this.setState(prevState => ({
        newEntry: { ...prevState.newEntry, file: file, fileUrl: fileUrl }
      }));
    }
  }

  handleInputChange(event, id) {
    const { name, value } = event.target;

    // Determine if the input change is for an existing entry or the new entry
    const isEditingExistingEntry = id !== undefined;

    // Validate input based on field name
    let newValue = value;
    if (name === 'firstName' || name === 'lastName') {
      // Only allow alphabetic characters for First Name and Last Name
      newValue = value.replace(/[^A-Za-z]/ig, '');
    } else if (name === 'phone') {
      // Only allow numeric characters for Phone
      newValue = value.replace(/[^0-9]/g, '');
    }

    // Update the state based on whether it's an edit of an existing entry or the new entry
    if (isEditingExistingEntry) {
      // If editing an existing entry, update only that entry in the state
      this.setState(prevState => ({
        data: prevState.data.map(employee => {
          if (employee.id === id) {
            return { ...employee, [name]: newValue };
          }
          return employee;
        })
      }));
    } else {
      // If it's the new entry being edited, update only the new entry in the state
      this.setState(prevState => ({
        newEntry: { ...prevState.newEntry, [name]: newValue }
      }));
    }
  }

  handleAdd() {
    const { data, newEntry } = this.state;
    const id = data.length + 1;
    this.setState({
      data: [...data, newEntry],
      newEntry: { id: '', firstName: '', lastName: '', phone: '', email: '', file: null, fileUrl: null }
    });
  }

  handleDelete(id) {
    this.setState(prevState => ({
      data: prevState.data.filter(employee => employee.id !== id)
    }));
  }

  handleEdit(id) {
    this.setState({ editingId: id });
  }

  handleSave() {
    this.setState({ editingId: null });
  }

  render() {
    const { data, editingId, newEntry } = this.state;
    const firstEmployeeId = data.length > 0 ? data[0].id : null;
    
    return (
      <div className="App">
        <h1>Employee Data</h1>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Choose File</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee) => (
              <tr key={employee.id}>
                <td>{editingId === employee.id ?
                  <input type="text" name="firstName" value={employee.firstName} onChange={(event) => this.handleInputChange(event, employee.id)} maxLength="15" /> :
                  employee.firstName}</td>
                <td>{editingId === employee.id ?
                  <input type="text" name="lastName" value={employee.lastName} onChange={(event) => this.handleInputChange(event, employee.id)} maxLength="15" /> :
                  employee.lastName}</td>
                <td>{editingId === employee.id ?
                  <input type="text" name="phone" value={employee.phone} onChange={(event) => this.handleInputChange(event, employee.id)} maxLength="14" /> :
                  employee.phone}</td>
                <td>{editingId === employee.id ?
                  <input type="email" name="email" value={employee.email} onChange={(event) => this.handleInputChange(event, employee.id)} /> :
                  employee.email}</td>
                <td>
                  {employee.fileUrl ? <img src={employee.fileUrl} alt="" style={{ width: '50px', height: '50px' }} /> : ""}
                </td>
                <td>
                  {editingId === employee.id ? (
                    <>
                      <button onClick={() => this.handleSave()}>Save</button>
                      <button onClick={() => this.handleEdit(null)}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => this.handleEdit(employee.id)}>Edit</button>
                      <button onClick={() => this.handleDelete(employee.id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
            <tr>
              <td><input type="text" name="firstName" value={newEntry.firstName} onChange={(event) => this.handleInputChange(event)} maxLength="15" /></td>
              <td><input type="text" name="lastName" value={newEntry.lastName} onChange={(event) => this.handleInputChange(event)} maxLength="15" /></td>
              <td><input type="text" name="phone" value={newEntry.phone} onChange={(event) => this.handleInputChange(event)} maxLength="14" /></td>
              <td><input type="email" name="email" value={newEntry.email} onChange={(event) => this.handleInputChange(event)} /></td>
              <td>
                <input type="file" onChange={(event) => this.handleFileChange(event)} />
                {newEntry.fileUrl ? <img src={newEntry.fileUrl} alt="" style={{ width: '50px', height: '50px' }} /> : ""}
              </td>
              <td><button onClick={() => this.handleAdd()} disabled={!(newEntry.firstName && newEntry.lastName && newEntry.phone && newEntry.email && newEntry.file)}>Add</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
