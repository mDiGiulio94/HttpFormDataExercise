import { useActionState } from "react";

export function NewOpinion() {
  
  function shareOpinionAction(prevState, formData) {
    const title = formData.get("title");
    const body = formData.get("body");
    const userName = formData.get("userName");

    let errors = [];

    if (title.trim().length < 5) {
      error.push("Title must be at least 5 characters");
    }

    if (body.trim().length < 20 || body.trim().length > 500) {
      error.push("Your opinion must be between 20 and 500 characters");
    }

    if (!userName.trim()) {
      error.push("Your name must be between 3 and 100 characters");
    }

    if (error.length > 0) {
      return { errors, enteredValues: { title, body, userName } };
    }

    return { errors: null}
  }

    const [formState, formAction] = useActionState(shareOpinionAction, {errors: null});


  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={shareOpinionAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5}></textarea>
        </p>

        {formState.errors && (
          <ul className="errors">
            {formState.errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}

        <p className="actions">
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
