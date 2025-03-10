"use client";
/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function BookingCalender() {
	useEffect(() => {
		(async function () {
			const cal = await getCalApi({ namespace: "discovery-meeting" });
			cal("ui", {
				theme: "dark",
				cssVarsPerTheme: {
					light: { "cal-brand": "#292929" },
					dark: { "cal-brand": "#0071F1" },
				},
				hideEventTypeDetails: false,
				layout: "month_view",
			});
		})();
	}, []);
	return (
		<Cal
			namespace="discovery-meeting"
			calLink="webflexrr/discovery-meeting"
			style={{ width: "100%", height: "100%", overflow: "scroll" }}
			config={{ layout: "month_view", theme: "dark" }}
		/>
	);
}
