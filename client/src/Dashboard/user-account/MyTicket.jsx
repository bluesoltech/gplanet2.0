// import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Ticket from "../../components/Ticket/Ticket";

const MyTicket = ({ id }) => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true)
  const token = localStorage.getItem("token");
  useEffect(() => {
    handleTicket();
  }, [])

  const handleTicket = async () => {

    try {
      const res = await fetch(`${BASE_URL}/users/tickets/my-ticket`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        userId: id,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }
      // console.log(data.data)
      setTickets(data.data)
      setLoading(false);
      // toast.success(data.message);
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  }
  // console.log(id)
  return (
    <section>
      <div className="gap-3 grid grid-cols-1 sm:items-center sm:ml-[20px] sm:max-xl: md:grid-cols-2 md:items">
        {loading ? (
          <h2 className="text-textColor">Loading..</h2>
        ) : (
          tickets.map((ticket) => (
            <div key={ticket._id} className="text-textColor pt-[15px] flex justify-center">
              <Ticket data = {ticket}/>
            </div>
          ))
        )}
      </div>

    </section>
  );

};

export default MyTicket;
