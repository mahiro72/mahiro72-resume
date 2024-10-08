import React from "react";
import EducationList from "./education/educationList";
import Summary from "./summary/summary";
import WorkList from "./work/workList";
import AchievementList from "./achievement/achievementList";
import SkillList from "./skill/skillList";
import ArticleList from "./article/articleList";
import Info from "./info/info";
import Footer from "../layout/Footer";
import InterviewList from "./interview/interviewList";

const Profile:React.FC = () => {
    return (
        <div className="mt-4 md:mt-12 sm:mx-24 md:mx-0 lg:mx-28 xl:mx-60">
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="col-span-1">
                    <Info />
                </div>
                <div className="col-span-1 md:col-span-2 md:pl-10">
                    {/* <SecTips text={"言語の切り変えが可能です. Language switching is available."} /> */}
                    <Summary />
                    <WorkList />
                    <EducationList />
                    <AchievementList />
                    <SkillList />
                    <InterviewList />
                    <ArticleList />
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Profile;