import sass from 'node-sass';

const config = { outputStyle: 'compressed' };

const scssStyle = `
  $lightGrey: #ededed;
  $grey: #c2c2c2;
  $lightDarkGrey: #dbd9d9;
  $lightVeryDarkGrey: #b3b1b1;
  $darkGrey: #3d3d3d;
  $darkBlue: #29385e;
  $blue: #6d7382;

  .externalDoc {
    width: 100%;
    font-family: sans-serif;
    color: $darkGrey;
    font-size: 12px;

    span {
      font-style: italic;
    }

    ul, ol {
      margin: 0px;
      padding: 0px 20px;
    }

    table {
      width: 100%;
      min-width: 900px;
      border-collapse: separate;
      border-spacing: 3.5px;
      margin-bottom: 10px; 

      tr {
        th, td {
          padding: 5px;
          vertical-align: top;
          text-align: left;
          background-color: $lightGrey;
          font-size: 12px;
        }

        th {
          vertical-align: middle;
          text-align: center;
          background-color: $grey;
        }
      }
    }

    p {
      margin-top: 0px;
    }

    .custEmpty {
      font-size: 16px;
      font-weight: 700;
      text-align: center;
      color: $lightDarkGrey;
    }

    .tableWrapper {
      overflow-x: auto;
    }

    .inline {
      display: flex;

      div.label {
        margin-right: 5px;
      }
    }

    .inlineBlock {
      display: inline-block;

      & > div {
        display: inline-block;
      }
    }

    .inlineWrap {
      flex-wrap: wrap;
    }

    .nonInline {
      display: flex;

      div {
        margin-right: 5px;
      }
    }

    .label {
      font-weight: 700;
      padding: 5px;
      color: $darkBlue;
    }

    .nonLabel {
      .label {
        width: auto;
      }
    }

    .value {
      padding: 5px;
    }

    .spacer {
      margin: 2.5px;
    }

    .content {
      padding: 2.5px;
    }

    .headerDetails {
      .title {
        text-align: center;
        color: $darkBlue;
      }

      .label {
        width: 150px;
        background-color: $grey;
      }

      .nonLabel {
        background-color: transparent;
        width: auto;
      }

      .value {
        background-color: transparent;
        width: auto;
      }
    }

    .sectionDetails {
      padding: 5px !important;
      margin-top: 10px;

      .title {
        margin: 10px 0px 15px 0px;
        padding-bottom: 10px;
        border-bottom: 1px solid $darkBlue;
        color: $darkBlue;
      }
    }

    .entryDetails {
      padding: 5px;
      font-size: 12px;

      h2 {
        font-size: 14px;
        margin: 0px;
      }

      .label {
        padding-top: 0px;
        padding-bottom: 0px;
        margin-right: 2px !important;
        width: 90px;
      }

      .nonLabel {
        background-color: transparent;
        width: auto;
      }

      .value {
        padding-top: 0px;
        padding-bottom: 0px;
      }

      & > div {
        margin: 2.5px;
        padding: 5px;
        border: 1px solid $grey;
      }

      .componentDetails, .entryRelationShipDetails {
        background-color: $lightGrey;
        padding: 5px;
        margin-top: 5px;

        & > div {
          margin: 5px;

          .componentDetails, .entryRelationShipDetails {
            margin-left: 5px;
            background-color: $lightDarkGrey;

            & > div {
              margin: 5px;

              .componentDetails, .entryRelationShipDetails {
                margin-left: 5px;
                background-color: $lightVeryDarkGrey;
              }
            }
          }
        }
      }
    }

    @media (min-width: 576px) {
      [class*="dcol-"] {
        width: 100%;
      }

      .dcol-1, .dcol-2 .dcol-3, .dcol-4 {
        width: 100%;
      }
    }

    @media (min-width: 768px) {
      [class*="dcol-"] {
        width: 23%;
      }

      .dcol-4 {
        width: 31.33%;
      }

      .dcol-3 {
        width: 48%;
      }

      .dcol-1, .dcol-2 {
        width: 100%;
      }
    }

    @media (min-width: 992px) {
      [class*="dcol-"] {
        width: 19%;
      }

      .dcol-4 {
        width: 23%;
      }

      .dcol-3 {
        width: 31.33%;
      }

      .dcol-2 {
        width: 48%;
      }

      .dcol-1 {
        width: 100%;
      }
    }
  }
`;

let style = sass.renderSync({ data: scssStyle, ...config });
style = `<style>${style.css.toString()}</style>`;

interface styleInheritance {
  parent?: string;
  children?: string;
  elements?: number;
}

// eslint-disable-next-line no-undef
export { style, styleInheritance };
