import Renderable from "../Renderable";

import "./InboxControls.scss";

class InboxControls extends Renderable {
    render() {
        this.element = this.elementCreateHTML("aside", this.block(), `
        <button class="${this.block("compose-new")}"> Compose </button>

		<form class="${this.block("navigation")}">
		</form>
        `);

        const buttons = [
            {name: "Inbox", style: "inbox"},
            {name: "Starred", style: "starred"},
            {name: "Snoozed", style: "snoozed"},
            {name: "Sent", style: "sent"},
            {name: "Drafts", style: "drafts"},
            {name: "More", style: "more"}];

        let navigation = this.element.getElementsByClassName(this.block("navigation"))[0];
        buttons.map(btn => navigation.appendChild(
            this.elementCreate("button", this.block(["letters-type", "letters-type-" + btn.Game]), btn.name)
        ));
    }
}

export default InboxControls;
