import {
  getList,
  getParagraph,
  getTable,
  getContent,
  getCaption,
  getText,
  getEntry,

  getAct,
  getOrganizer,
  getObservation,
  getSubstanceAdministration,
  getEncounter,
  getProcedure,

  getStatusCode,
  getCode,
  getOriginalText,
  getEffectiveTime,
  getEntryRelationship,
} from '../entries';

export default function entryType(entry) {
  const html = [];

  const {
    title,
    // entry-level-sub templates
    statusCode,
    code,
    originalText,
    effectiveTime,
    entryRelationship,
    // entry-level templates
    act,
    organizer,
    procedure,
    observation,
    substanceAdministration,
    encounter,
    // generic html templates
    content,
    table,
    list,
    paragraph,
    caption,
    _,
    ID,
    text
  } = entry;

  // generic html templates

  if (_) {
    html.push(_);
  }

  if (ID) {
    html.push(ID);
  }

  if (text) {
    html.push(getText(text));
  }

  if (list) {
    html.push(getList(list));
  }

  if (table) {
    html.push(getTable(table));
  }

  if (caption) {
    html.push(getCaption(caption));
  }

  if (content) {
    html.push(getContent(content));
  }

  if (paragraph) {
    html.push(getParagraph(paragraph));
  }

  // entry-level templates

  if (entry.entry) {
    // console.log(title)
    html.push(getEntry(entry.entry));
  }

  if (act) {
    html.push(getAct(act));
  }

  if (observation) {
    html.push(getObservation(observation));
  }

  // entry-level sub-templates

  if (code) {
    html.push(getCode(code));
  }

  if (originalText) {
    html.push(getOriginalText(originalText));
  }

  if (statusCode) {
    html.push(getStatusCode(statusCode));
  }

  if (effectiveTime) {
    html.push(getEffectiveTime(effectiveTime));
  }

  if (entryRelationship) {
    html.push(getEntryRelationship(entryRelationship));
  }

  return html.join('');
}
