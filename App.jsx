
import './App.css'
import LudoBoard from './LudoBoard'
import TodoList from './TodoList';
import Lottery from './Lottery';
import TicketNum from './TicketNum';
import Ticket from './Ticket';
import { sum } from './helper';
import Form from './Form';
import Commentform from './CommentsForm';
import Comment from './Comment';

function App() {

//   let winCondition = (ticket) => {
//     //return sum(ticket) === 15;
//     //return ticket.every((num) => num === ticket[0]);
//     return ticket[0] === 0;
//   };
  
//   return (
//     <>
//     <Lottery n={3} winCondition={winCondition} />
//     </>
//   );

  return (
    <>
      <Comment />
      
    </> 
  );
 }

export default App;
