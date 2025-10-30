import type { ReactNode } from "react";
// import type { FC } from "react";
// import type { PropsWithChildren } from "react";

// type CourseGoalProps = PropsWithChildren<{title: string}> (Otra manera de obtener children)
type CourseGoalProps = {
    id: number;
    title: string;
    children: ReactNode;
    onDelete: (id: number) => void
}


const CourseGoal = ({ title, id, children, onDelete }: CourseGoalProps) => {

    return (
        <article>
            <div>
                <h1>{title}</h1>
                {children}
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    );
}
// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {

//     return (
//         <article>
//             <div>
//                 <h1>{title}</h1>
//                 {children}
//             </div>
//             <button>Delete</button>
//         </article>
//     );
// }
export default CourseGoal;