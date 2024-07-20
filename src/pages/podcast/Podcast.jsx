import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import Checkbox from "../../components/checkbox/Checkbox";
import Upload from "../../components/upload/Upload";
export default function Podcast() {
  return (
    <section className="podcast">
      <header className="podcast__header">
        <h1 className="podcast__text">Create New Podcast</h1>
        <div className="podcast__button-wrapper">
          <Button className="btn-outline" label="Cancel" />
          <Button className="btn-primary" label="Save" />
        </div>
      </header>
      <form className="podcast__form">
        <div className="podcast__input-wrapper">
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
        <div className="podcast__upload">
          <Upload />
          <Button className="btn-primary" label="Upload" width={100} />
        </div>
      </form>
    </section>
  );
}
