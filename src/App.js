import React, { useState } from "react";
import "./App.css";

function App() {
  const lessons = [
    {
      id: 1,
      title: "Introduction",
      description: "Overview of React and LMS fundamentals",
      duration: "30 mins",
    },
    {
      id: 2,
      title: "Basics",
      description: "JSX, Components, Props and folder structure",
      duration: "1 hour",
    },
    {
      id: 3,
      title: "Advanced",
      description: "Hooks, State management and Events",
      duration: "1.5 hours",
    },
    {
      id: 4,
      title: "Summary",
      description: "Course recap and learning outcomes",
      duration: "20 mins",
    },
  ];

  const [selectedLesson, setSelectedLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);

  const markAsCompleted = (id) => {
    if (!completedLessons.includes(id)) {
      setCompletedLessons([...completedLessons, id]);
    }
  };

  const progress = Math.round(
    (completedLessons.length / lessons.length) * 100
  );

  return (
    <div className="page">
      <div className="lms-card">
        <h1 className="course-title">React Learning Management System</h1>
        <p className="course-desc">
          A beginner-friendly course to master React fundamentals
        </p>

        <div className="course-meta">
          <span>⏱ 4 Weeks</span>
          <span>📚 {lessons.length} Lessons</span>
        </div>

        <div className="progress-box">
          <div className="progress-text">Progress: {progress}%</div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <h2 className="section-title">Lessons</h2>
        <p className="lesson-count">
            Total Lessons: {lessons.length}
        </p>


        <ul className="lesson-list">
          {lessons.map((lesson) => (
            <li
              key={lesson.id}
              className={
                selectedLesson?.id === lesson.id
                  ? "lesson-item active"
                  : "lesson-item"
              }
              onClick={() => setSelectedLesson(lesson)}
            >
              <div>
                <span className="lesson-title">{lesson.title}</span>
                <span className="lesson-duration">{lesson.duration}</span>
              </div>

              {completedLessons.includes(lesson.id) && (
                <span className="check">✔</span>
              )}
            </li>
          ))}
        </ul>

        {selectedLesson && (
          <div className="lesson-details">
            <h3>{selectedLesson.title}</h3>
            <p>{selectedLesson.description}</p>
            <p>
              <b>Duration:</b> {selectedLesson.duration}
            </p>

            <button
              className="complete-btn"
              onClick={() => markAsCompleted(selectedLesson.id)}
            >
              Mark as Completed
            </button>
          </div>
        )}

        <p className="completed-info">
          Completed Lessons: {completedLessons.length}
        </p>
      </div>
    </div>
  );
}

export default App;
