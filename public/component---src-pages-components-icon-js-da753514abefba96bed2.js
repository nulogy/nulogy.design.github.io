(window.webpackJsonp = window.webpackJsonp || []).push([
  [25],
  {
    Giz6: function(e, t, l) {
      "use strict";
      l.r(t);
      var a = l("j8BX"),
        c = l.n(a),
        n = l("q1tI"),
        i = l.n(n),
        h = l("TJpk"),
        o = l("xj1T"),
        v = l.n(o),
        s = l("3/HP"),
        r = l("m+Ts"),
        m = l("Kvkj"),
        z = l("ttvI"),
        p = [
          {
            name: "color",
            type: "String",
            defaultValue: "currentcolor",
            description:
              "The icon's colour, if different than parent's text colour."
          },
          {
            name: "icon",
            type: "String",
            defaultValue: "Required",
            description:
              "The icon to display. Accepts icons listed in Available Icons above."
          },
          {
            name: "size",
            type: "String",
            defaultValue: "24px",
            description: "The size of the icon"
          },
          {
            name: "title",
            type: "String",
            defaultValue: "null",
            description:
              "Alternative text to be read by assistive devices. Leave blank if icon is purely decorative."
          },
          {
            name: "className",
            type: "String",
            defaultValue: "undefined",
            description: "className passed to the svg element."
          }
        ],
        u = Object.keys(r),
        w = function(e) {
          return i.a.createElement(
            s.u,
            c()({ flexWrap: "wrap" }, e),
            u.map(function(e) {
              return i.a.createElement(
                s.u,
                { key: e, width: { extraSmall: 0.5, medium: 1 / 3 } },
                i.a.createElement(s.B, { icon: e }),
                i.a.createElement(m.c, { align: "center", ml: "x1" }, e)
              );
            })
          );
        };
      t.default = function() {
        return i.a.createElement(
          m.h,
          null,
          i.a.createElement(
            h.Helmet,
            null,
            i.a.createElement("title", null, "Icons")
          ),
          i.a.createElement(
            m.e,
            null,
            i.a.createElement(s.fb, null, "Icons"),
            i.a.createElement(
              m.f,
              null,
              "Icons can be used alongside text to help assist users in finding certain actions on a page.",
              " "
            )
          ),
          i.a.createElement(
            m.a,
            null,
            i.a.createElement(s.B, { icon: "user" }),
            i.a.createElement(
              v.a,
              { className: "js" },
              'import { Icon } from "@nulogy/components";\n\n<Icon icon="user" />'
            )
          ),
          i.a.createElement(
            m.a,
            null,
            i.a.createElement(s.T, null, "Avaliable Icons"),
            i.a.createElement(
              m.c,
              { mb: "x4" },
              "Nulogy uses a selection of solid style",
              " ",
              i.a.createElement(
                s.E,
                { href: "https://material.io/tools/icons/?style=baseline" },
                " ",
                "Material Design"
              ),
              " ",
              "icons.",
              " "
            ),
            i.a.createElement(w, { mb: "x2" }),
            i.a.createElement(
              m.c,
              null,
              "If your interface requires an icon not listed here, please post a message in the",
              " ",
              i.a.createElement(
                s.E,
                { href: "slack://channel?id=CBAFQ4X7X/" },
                "#design-system"
              ),
              " slack channel."
            )
          ),
          i.a.createElement(
            m.a,
            null,
            i.a.createElement(s.T, null, "Guidelines"),
            i.a.createElement(
              s.F,
              null,
              i.a.createElement(
                s.G,
                null,
                "Avoid using icons without labels unless the meaning is ubiquitous, like print"
              )
            )
          ),
          i.a.createElement(
            m.a,
            null,
            i.a.createElement(s.T, null, "Props"),
            i.a.createElement(m.i, { propsRows: p })
          ),
          i.a.createElement(
            m.a,
            null,
            i.a.createElement(s.T, null, "Resources"),
            i.a.createElement(
              s.F,
              null,
              i.a.createElement(
                s.G,
                null,
                i.a.createElement(
                  s.E,
                  { href: "".concat(z.a, "icon--icon-skipstoryshot") },
                  "View in Storybook"
                )
              ),
              i.a.createElement(
                s.G,
                null,
                i.a.createElement(
                  m.c,
                  null,
                  "For more information on icon usability and recognition, see this study from Nielsen Norman Group:",
                  " ",
                  i.a.createElement(
                    s.E,
                    {
                      href: "https://www.nngroup.com/articles/icon-usability/"
                    },
                    "Icon Usability."
                  )
                )
              )
            )
          )
        );
      };
    },
    "m+Ts": function(e) {
      e.exports = JSON.parse(
        '{"accessTime":{"path":["M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z","M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"],"viewBox":"0 0 24 24"},"add":{"path":["M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],"viewBox":"0 0 24 24"},"addCircleOutline":{"path":["M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"],"viewBox":"0 0 24 24"},"arrowForward":{"path":["M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"],"viewBox":"0 0 24 24"},"block":{"path":["M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"],"viewBox":"0 0 24 24"},"building":{"path":["M24 14V6H4v36h40V14H24zM12 38H8v-4h4v4zm0-8H8v-4h4v4zm0-8H8v-4h4v4zm0-8H8v-4h4v4zm8 24h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm20 24H24v-4h4v-4h-4v-4h4v-4h-4v-4h16v20zm-4-16h-4v4h4v-4zm0 8h-4v4h4v-4z"],"viewBox":"0 0 48 48"},"calendarToday":{"path":["M22 3h-3V1h-2v2H7V1H5v2H2v20h20V3zm-2 18H4V8h16v13z"],"viewBox":"0 0 24 24"},"cancel":{"path":["M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"],"viewBox":"0 0 24 24"},"chatBubble":{"path":["M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"],"viewBox":"0 0 24 24"},"check":{"path":["M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"],"viewBox":"0 0 24 24"},"checkCircleOutline":{"path":["M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"],"viewBox":"0 0 24 24"},"close":{"path":["M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"],"viewBox":"0 0 24 24"},"delete":{"path":["M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"],"viewBox":"0 0 24 24"},"downArrow":{"path":["M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"],"viewBox":"0 0 24 24"},"drag":{"path":["M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"],"viewBox":"0 0 24 24"},"edit":{"path":["M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"],"viewBox":"0 0 24 24"},"error":{"path":["M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"],"viewBox":"0 0 24 24"},"errorFilled":{"path":["M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"],"viewBox":"0 0 24 24"},"filter":{"path":["M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"],"viewBox":"0 0 24 24"},"getApp":{"path":["M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"],"viewBox":"0 0 24 24"},"help":{"path":["M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"],"viewBox":"0 0 24 24"},"leftArrow":{"path":["M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],"viewBox":"0 0 24 24"},"lock":{"path":["M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"],"viewBox":"0 0 24 24"},"maximize":{"path":["M3 3h18v2H3z"],"viewBox":"0 0 24 24"},"menu":{"path":["M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"],"viewBox":"0 0 24 24"},"minimize":{"path":["M6 19h12v2H6z"],"viewBox":"0 0 24 24"},"more":{"path":["M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"],"viewBox":"0 0 24 24"},"print":{"path":["M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"],"viewBox":"0 0 24 24"},"publish":{"path":["M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"],"viewBox":"0 0 24 24"},"queryBuilder":{"path":["M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"],"viewBox":"0 0 24 24"},"refresh":{"path":["M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"],"viewBox":"0 0 24 24"},"removeCircleOutline":{"path":["M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"],"viewBox":"0 0 24 24"},"rightArrow":{"path":["M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],"viewBox":"0 0 24 24"},"save":{"path":["M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"],"viewBox":"0 0 24 24"},"search":{"path":["M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"],"viewBox":"0 0 24 24"},"settings":{"path":["M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"],"viewBox":"0 0 20 20"},"sortDown":{"path":["M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"],"viewBox":"0 0 24 24"},"sortUp":{"path":["M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"],"viewBox":"0 0 24 24"},"unlock":{"path":["M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"],"viewBox":"0 0 24 24"},"upArrow":{"path":["M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"],"viewBox":"0 0 24 24"},"user":{"path":["M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"],"viewBox":"0 0 24 24"},"warning":{"path":["M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"],"viewBox":"0 0 24 24"},"zoomIn":{"path":["M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z","M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"],"viewBox":"0 0 24 24"},"zoomOut":{"path":["M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"],"viewBox":"0 0 24 24"}}'
      );
    },
    ttvI: function(e, t, l) {
      "use strict";
      l.d(t, "c", function() {
        return a;
      }),
        l.d(t, "a", function() {
          return c;
        }),
        l.d(t, "b", function() {
          return n;
        });
      var a = "https://storybook.nulogy.design/?path=/story/",
        c = "".concat(a, "components-"),
        n = "".concat(a, "pages-");
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-icon-js-da753514abefba96bed2.js.map
