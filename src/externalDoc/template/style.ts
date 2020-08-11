import sass from 'node-sass';

const config = { outputStyle: 'compressed' };

const scssStyle = `
  $border: #eeeeee;
  $grey: #1f1e1e;
  $lightGrey: #d1d1d1;
  $blue: #1439a8;
  $darkBlue: #344a80;
  $lightBlue: #d5dde8;
  $white: #ffffff;

  details {
    summary {
      outline: 0px;
    }
  }

  .externalDoc {
    padding-bottom: 20px;
    font-size: 14px;
    color: $grey;

    .custField {
      width: 100%;
      display: flex;
      margin-bottom: 5px;

      .label {
        word-wrap: break-word;
        min-width: 85px;
        width: 90px;
        margin-right: 10px;
        font-weight: 700;
      }

      .value {
        word-wrap: break-word;
        width: 100%;
      }
    }

    .title {
      font-weight: 700;
    }

    .custEmpty {
      display: block;
      margin: 20px 0px;
      text-align: center;
      font-weight: 700;
      font-size: 20px;
      color: $lightGrey;
    }

    .docWrapper {
      display: flex;
      flex-wrap: wrap;

      .headerDetails, .componentBody {
        width: 100%;
        max-width: 100%;
        height: auto;
        min-height: 100px;

        & > div {
          border: 1px solid $border;
          background-color: $white;
          margin: 0px 10px;
        }
      }

      .headerDetails > div:nth-child(1) {
        padding: 20px;
      }

      .headerDetails {
        margin-bottom: 20px;

        .title {
          font-weight: 500;
          margin: 0px;
          margin-bottom: 20px;
          color: $grey;
          text-align: center;
        }

        .spacer {
          margin: 10px 0px;
        }

        .patientDetails {
          color: $darkBlue;
          font-size: 13px;

          .name {
            text-align: center;
            color: $blue;
            font-weight: 700;
            margin-bottom: 10px;
            font-size: 20px;
          }

          .label {
            font-weight: 900;
          }

          .value {
            color: $grey;
          }
        }

        .providerDetails, .authorDetails {
          font-size: 12px;
          color: rgba(0,0,0,0.6);

          .title {
            text-align: left;
            margin-top: 20px;
            font-size: 16px;
            font-weight: 700;
            color: rgba(0,0,0,0.6);
          }

          .label {
            color: rgba(0,0,0,0.6);
          }
        }
      }

      .componentBody {
        width: 100%;
        max-width: 100%;

        .sectionDetails {
          .title {
            background-color: $blue;
            border-bottom: 5px solid $white;
            color: $white;
            padding: 10px 20px;

            &:hover {
              cursor: pointer;
            }
          }

          .content {
            padding: 20px;
            padding-top: 10px;
            padding-bottom: 10px;

            p {
              display: inline-block;
              margin: 0px;
              margin-bottom: 10px;
            }

            .entryDetails {
              font-size: 12px;

              details {
                padding-bottom: 10px;
                margin-top: 10px;
                margin-bottom: 10px;

                .custField {
                  .value {
                    color: rgba(0, 0, 0, 0.6);
                  }
                }

                summary {
                  color: $blue;
                  font-size: 14px;
                  font-weight: 700;
                }

                details {
                  padding: 10px;
                  background-color: #f2f2f2;
                  color: $grey;

                  summary {
                    font-size: 12px;
                    font-weight: 700;
                  }

                  details {
                    padding: 10px;
                    background-color: #e3e1e1;
                  
                    details {
                      padding: 10px;
                      background-color: #cfcccc;
                    }
                  }
                }
              }
            }

            .unordered, .ordered {
              p {
                margin-bottom: 0px;
                color: $grey;
              }
            }

            .tableWrapper {
              overflow-x: auto;
              margin-top: 10px;
              margin-bottom: 10px;

              table {
                width: 100%;
                min-width: 900px;
                border-collapse: separate;
                border-spacing: 2px;

                tr {
                  th, td {
                    padding: 10px;
                    vertical-align: top;
                    text-align: left;
                    font-size: 12px;
                    background-color: #f2f2f2;
                    color: $grey;
                  }

                  th {
                    vertical-align: middle;
                    text-align: center;
                    background-color: #d5dde8;

                    p {
                      margin-bottom: 0px;
                      font-weight: 700;
                      color: $grey;
                    }
                  }

                  td {
                    p {
                      display: block;
                    }
                  }
                }
              }

              .tableWrapper {
                table tr td {
                  background-color: #e3e1e1;
                }

                table tr th {
                  background-color: #c7ccd4;
                }
              }
            }

            .inlineBlock {
              .custField > div {
                display: inline-block;

                &.label {
                  min-width: auto;
                  width: auto;
                }
              }
            }
          } 
        }
      }

      @media (min-width: 740px) {
        flex-wrap: nowrap;

        .headerDetails {
          width: 30%;
          margin-bottom: 0px;
        }

        .componentBody {
          width: 70%;
        }
      }
    }
  }
`;

let style = sass.renderSync({ data: scssStyle, ...config });
style = `<style>${style.css.toString()}</style>`;

interface styleInheritance {
  elements?: number;
  parent?: boolean;
}

// eslint-disable-next-line no-undef
export { style, styleInheritance };
