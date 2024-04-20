/*
 * This module provides an Apollo document transform that ensures the `id`
 * field is fetched for all `node` values in every GraphQL query.  See the
 * Apollo documentation for more info:
 *
 * https://www.apollographql.com/docs/react/data/document-transforms/#write-your-own-document-transform
 */

import { DocumentTransform } from '@apollo/client'
import { visit, Kind } from 'graphql'

const documentTransform = new DocumentTransform((document) => {
  const transformedDocument = visit(document, {
    Field(field) {
      if (field.name.value !== 'node') {
        return
      }

      const selections = field.selectionSet?.selections ?? []
      for (const selection of selections) {
        if (selection.kind === Kind.FIELD && selection.name.value === 'id') {
          return
        }
      }

      const idField = {
        kind: Kind.FIELD,
        name: {
          kind: Kind.NAME,
          value: 'id'
        }
      }

      return {
        ...field,
        selectionSet: {
          ...field.selectionSet,
          selections: [ ...selections, idField ]
        }
      }
    }
  })

  return transformedDocument
})

export default documentTransform
