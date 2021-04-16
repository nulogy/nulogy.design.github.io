import React from 'react'
import { useView, Error, ActionButtons, Knobs } from 'react-view';
import Compiler from './Compiler';
import Editor from './Editor';

export default ({ componentName, scope,  props}) => {
  const params = useView({
    componentName,
    props,
    scope,
    imports: {
      "@nulogy/components": {
        named: [componentName]
      }
    },
  });
  return (
    <>
      <Compiler {...params.compilerProps} />
      <Error msg={params.errorProps.msg} isPopup />
      <Knobs {...params.knobProps} />
      <Editor {...params.editorProps} />
      <Error {...params.errorProps} />
      <ActionButtons {...params.actions} />
    </>
  )
}