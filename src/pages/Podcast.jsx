import Button from "../components/button/Button";
import Input from "../components/input/Input";
import Checkbox from "../components/checkbox/Checkbox";
export default function Podcast() {
  return (
    <section className="podcast-section">
      <header className="podcast-section__header">
        <h1 className="podcast-section__header-text">Create New Podcast</h1>
        <div className="podcast-section__header-wrapper">
          <Button className="btn-outline" label="Cancel" />
          <Button className="btn-primary" label="Save" />
        </div>
      </header>
      <form className="podcast-section__form">
        <div className="podcast-section__form-inputs">
          <Input
            label="Title"
            type="text"
            placeholder="Enter station title"
            id="title"
          />
          <Input
            label="Link"
            type="text"
            placeholder="Enter website URL"
            id="link"
          />
          <Input
            label="Description"
            type="textarea"
            placeholder="Enter station description"
            id="description"
            rows={10}
          />
          <Checkbox label="Status" id="status" />
          <Checkbox label="Premium" id="premium" />
          <Checkbox label="Make Default" id="makeDefault" />
          <Checkbox label="Visible on the Portal" id="visible" />
        </div>
        <div className="podcast-section__form-upload">
          <Button className="btn-primary" label="Upload" width={100} />
        </div>
      </form>
    </section>
  );
}
