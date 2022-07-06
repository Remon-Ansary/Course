import React from "react"
import courseData from "../jsondata.json"
import "./course.css"
function Course() {
  return (
    <div>
      <span>
        {courseData.map((course, index) => {
          return (
            <div key={index}>
              <div class="container">
                <h3>
                  <b>{course.title}</b>
                </h3>
                <p>
                  {course.courseType}{" "}
                  <i class="fa-solid fa-circle-question"></i>{" "}
                </p>

                <div class="row">
                  <div class="col-md-6">
                    <p> {course.description}</p>
                    <div>
                      <div>
                        <div class="row">
                          <div class="col-md-3">
                            <img
                              src={course.profileImage}
                              alt="ok"
                              class="rounded-circle"
                            />
                          </div>
                          <div class="col-md-6">
                            <span class="text-blue">
                              <p>
                                <b>{course.userName}</b>
                              </p>
                            </span>
                          </div>
                        </div>
                        <br />
                        <div class="teacher-review">
                          <span class="star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                          </span>{" "}
                          {course.totalTeacherReviews} total reviews for this
                          teacher
                        </div>

                        <div class="class-review">
                          <span class="star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                          </span>{" "}
                          {course.userClassReview} reviews for this class
                        </div>
                        <br />
                        <p>
                          <b>Completed by {course.completeCount} learners</b>
                        </p>
                        <div class="row">
                          <div class="col-md-6">
                            <button type="submit" class="btn btn-primary">
                              {" "}
                              See class Schedule
                            </button>
                          </div>
                          <div class="col-md-3">
                            <span class="text-blue">
                              <p>
                                <i class="fa-solid fa-heart"></i> Save
                              </p>
                            </span>
                          </div>
                          <div class="col-md-3">
                            <span class="text-blue">
                              <p>
                                <i class="fa-solid fa-share"></i> Share
                              </p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-6">
                        <div
                          class="imageDiv"
                          style={{
                            backgroundImage: "url(" + course.imageUrl.url + ")",
                          }}
                        ></div>
                        <br />
                      </div>
                      <div class="col-md-6">
                        <div class="row">
                          <div
                            class="imageDiv2"
                            style={{
                              backgroundImage:
                                "url(" + course.imageUrl.url2 + ")",
                            }}
                          ></div>
                        </div>
                        <br />
                        <div class="row">
                          <div
                            class="imageDiv3"
                            style={{
                              backgroundImage:
                                "url(" + course.imageUrl.url3 + ")",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </span>
    </div>
  )
}

export default Course
