import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../services/actions/todosActions";

const Todos = () => {
  const { isLoading, error, todos } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div>
      {isLoading && <h4>Loading...</h4>}
      {error && <h4>{error && error.message}</h4>}
      <section>
        {todos &&
          todos.map((todo) => {
            let { id, title } = todo;

            return (
              <article key={id}>
                <h4>{id}</h4>
                <h4>{title}</h4>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default Todos;
