/* scrollbar.ts */

export const styleScrollbars = (ionContentRef?: any) => {
  if (!ionContentRef) return;
    const stylesheet = `
        ::-webkit-scrollbar {
            display: none !important;
        }
        ::-webkit-scrollbar-track {
            display: none;
            background: rgba(198,204,212, 0.5);
        }
        ::-webkit-scrollbar-thumb {
            display: none;
            border: 10px solid #b7bfc9;
            background: #acb5c1;
        }
      ::-webkit-scrollbar-thumb:hover {
          display: none;
    }`;

  const styleElmt = ionContentRef.shadowRoot.querySelector("style");
  if (styleElmt) {
    styleElmt.append(stylesheet);
  } else {
    const barStyle = document.createElement("style");
    barStyle.append(stylesheet);
    ionContentRef.shadowRoot.appendChild(barStyle);
  }
};
