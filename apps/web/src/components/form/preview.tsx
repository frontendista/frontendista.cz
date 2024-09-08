
import { useEffect, useState, type MutableRef } from "preact/hooks";

import type { FunctionComponent } from "preact/compat";

interface PreviewProps {
	form: MutableRef<HTMLFormElement | null>
}

export const Preview: FunctionComponent<PreviewProps> = ({ form }) => {
	const [values, setValues] = useState<FormData | null>(null);

	useEffect(() => {
		if (form.current) {
			setValues(new FormData(form.current));
		}
	}, []);

	if (!values || !values.get("firstname") || !values.get("lastname")) {
		return <p>Can't show preview.</p>;
	}

	return (
		<div className="aspect-video w-[20rem] bg-red-500">
			<p>{values.get("message")}</p>
		</div>
	);
};
