import { useState, PureComponent, useEffect } from "react";
import MainLayout from "../Components/MainLayout.jsx";
import CustomTooltipBar from "../Components/CustomTooltipBar.jsx";
import CustomTooltipPie from "../Components/CustomTooltipPie.jsx";
import { useMood } from "../Contexts/MoodContext.jsx";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Pie,
  PieChart,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Dashboard() {
  const [moodLoad, setMoodLoad] = useState([]);
  const [moodLoadBulanan, setMoodLoadBulanan] = useState([]);
  const { mood } = useMood();
  const date = new Date();
  const bulan = (date.getMonth() + 1).toString().padStart(2, "0");

  useEffect(() => {
    const savedMood = localStorage.getItem("mood");
    if (savedMood) {
      setMoodLoad(JSON.parse(savedMood));
      setMoodLoadBulanan(JSON.parse(savedMood).filter((mood) => mood.date.split("/")[1] == bulan));
    }
  }, []);
  useEffect(() => {
    if (mood.length > 0) {
      setMoodLoad(mood);
      setMoodLoadBulanan(mood.filter((mood) => mood.date.split("/")[1] == bulan));
    }
  }, [mood]);


  const [pieData, setPieData] = useState([
    { name: "Positif", value: 0 },
    { name: "Netral", value: 0 },
    { name: "Negatif", value: 0 },
  ]);
  const [pieDataBulanan, setPieDataBulanan] = useState([
    { name: "Positif", value: 0 },
    { name: "Netral", value: 0 },
    { name: "Negatif", value: 0 },
  ]);

  useEffect(() => {
    let positif = 0,
      netral = 0,
      negatif = 0;
    moodLoad.forEach((data) => {
      data.score == 50 ? netral++ : data.score > 50 ? positif++ : negatif++;
    });
    setPieData([
      { name: "Positif", value: positif },
      { name: "Netral", value: netral },
      { name: "Negatif", value: negatif },
    ]);
  }, [moodLoad]);
  useEffect(() => {
    let positifBulanan = 0,
      netralBulanan = 0,
      negatifBulanan = 0;
    moodLoadBulanan.forEach((data) => {
      data.score == 50 ? netralBulanan++ : data.score > 50 ? positifBulanan++ : negatifBulanan++;
    });
    setPieDataBulanan([
      { name: "Positif", value: positifBulanan },
      { name: "Netral", value: netralBulanan },
      { name: "Negatif", value: negatifBulanan },
    ]);
  }, [moodLoadBulanan]);

  const COLORS = ["#00FF00", "#FFBB28", "#FF0000"];

  return (
    <MainLayout>
      <h1 className="poppins-medium text-2xl lg:text-5xl text-brown-quaternary w-full text-center p-5 mt-10">
        Ringkasan Data Bulan Ini
      </h1>
      <section className="flex w-full lg:flex-row flex-col gap-5 p-5">
        <div className="lg:w-1/2 w-full h-[350px] p-5 bg-brown-tertiary rounded-lg">
          <div className="w-full h-full overflow-x-auto">
            <div className="min-w-[1000px] h-full overflow-x-auto">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[...moodLoadBulanan].reverse()} barCategoryGap={5}>
                  <XAxis
                    dataKey="date"
                    tick={{ fill: "#fad4d4", fontSize: 12 }}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis tick={{ fill: "#fad4d4", fontSize: 12 }} />
                  <Tooltip content={<CustomTooltipBar />} />
                  <Bar dataKey="score" fill="#fad4d4">
                    {[...moodLoadBulanan].reverse().map((entry, index) => (
                      <Cell
                        key={entry.date}
                        fill={
                          entry.score > 50
                            ? "#00FF00"
                            : entry.score == 50
                            ? "#FFBB28"
                            : "#FF0000"
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full h-[350px] overflow-x-auto p-5 bg-brown-tertiary rounded-lg">
          <div className="min-w-[100px] h-full overflow-x-auto">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieDataBulanan}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {pieDataBulanan.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltipPie/>} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
      <h1 className="poppins-medium text-2xl lg:text-5xl text-brown-quaternary w-full text-center p-5 mt-10">
        Ringkasan Data Keseluruhan
      </h1>
      <section className="flex w-full lg:flex-row flex-col gap-5 p-5">
        <div className="lg:w-1/2 w-full h-[350px] p-5 bg-brown-tertiary rounded-lg">
          <div className="w-full h-full overflow-x-auto">
            <div className="min-w-[1000px] h-full overflow-x-auto">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[...moodLoad].reverse()} barCategoryGap={5}>
                  <XAxis
                    dataKey="date"
                    tick={{ fill: "#fad4d4", fontSize: 12 }}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis tick={{ fill: "#fad4d4", fontSize: 12 }} />
                  <Tooltip content={<CustomTooltipBar />} />
                  <Bar dataKey="score" fill="#fad4d4">
                    {[...moodLoad].reverse().map((entry, index) => (
                      <Cell
                        key={entry.date}
                        fill={
                          entry.score > 50
                            ? "#00FF00"
                            : entry.score == 50
                            ? "#FFBB28"
                            : "#FF0000"
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full h-[350px] overflow-x-auto p-5 bg-brown-tertiary rounded-lg">
          <div className="min-w-[100px] h-full overflow-x-auto">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltipPie/>} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
export default Dashboard;
