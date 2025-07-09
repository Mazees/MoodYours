import { useState, useEffect, use } from "react";
import MainLayout from "../Components/MainLayout.jsx";
import AddMood from "../Components/AddMood.jsx";
import { useMood } from "../Contexts/MoodContext.jsx";
import { ListHistory } from "../Components/ListHistory.jsx";
import HistoryPagination from "../Components/HistoryPagination.jsx";

function History() {
  const [moodLoad, setMoodLoad] = useState([]);
  const [moodToday, setMoodToday] = useState(null);
  const { mood } = useMood();
  const [currentPage, setCurrentPage] = useState(1);
  const [historyPerPage, setHistoryPerPage] = useState(10);
  useEffect(() => {
    const savedMood = localStorage.getItem("mood");
    if (savedMood) {
      setMoodLoad(JSON.parse(savedMood));
    }
  }, []);

  useEffect(() => {
    if (mood.length > 0) {
      setMoodLoad(mood);
    }
  }, [mood]);

  const lastIndex = currentPage * historyPerPage;
  const fisrtIndex = lastIndex - historyPerPage;
  const currentHistory = [...moodLoad].reverse().slice(fisrtIndex, lastIndex);

  return (
    <MainLayout>
      <section className="w-full pt-10 gap-5 flex flex-col pr-3.5">
        <HistoryPagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalHistory={moodLoad.length}
          historyPerPage={historyPerPage}
          className="w-full flex justify-center items-center gap-2"
        />
        <ListHistory data={currentHistory} />
      </section>
    </MainLayout>
  );
}
export default History;
