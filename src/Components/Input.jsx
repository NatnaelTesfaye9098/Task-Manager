const Input = () => {
    return (
        <div class="input-container">
            <input type="text" name="title" placeholder="Title" autoFocus/>
            <textarea name="detail" rows="10" placeholder="Write the task"></textarea>
        </div>
    );
};

export default Input;
