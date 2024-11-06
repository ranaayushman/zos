import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { Edit, Plus } from "lucide-react";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Something Went Wrong");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading Topic", error);
  }
};

const Topics = async () => {
  const { topics } = await getTopics();
  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start mx-10"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <Edit size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Topics;
