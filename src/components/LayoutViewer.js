import { setState } from 'react';
import { Row, Col } from 'reactstrap';
import { componentsMap } from './index';

export default function LayoutViewer({ attributes, readMode }){
  const rowsCollection = Object.values(attributes?.rows);
  // The following commented code is part my angle for solving the last part
  // const [deepCopyRowsCollection, setDeepCopyRowsCollection] = setState(JSON.parse(JSON.stringify(rowsCollection)));

  return (
    <>
      {rowsCollection.map(({ columns, blockType }, idx) => {
        const Block = blockType ? Col : Row;

        return (
          <Block key={idx}>
            {columns.map(
              ({ componentName, uniqueKeyName, attributes, columnSpan }) => {
                if (componentName === 'LayoutViewer' ) {
                  return (
                      <Col key={uniqueKeyName} xs={columnSpan}>
                        <LayoutViewer attributes={attributes} readMode={readMode} />
                      </Col>  
                    )
                }
                
                const Component = componentsMap[componentName];

                return (
                  <Col key={uniqueKeyName} xs={columnSpan}>
                    <Component 
                      {...attributes} 
                      readMode={readMode} 
                      // The following commented code is part my angle for solving the last part
                      // deepCopyRowsCollection={deepCopyRowsCollection}
                      // setDeepCopyRowsCollection={setDeepCopyRowsCollection}
                      // uniqueKeyName={uniqueKeyName} 
                      // componentName={componentName}
                      />
                  </Col>
                );
              }
            )}
        </Block>
      );
  })}
    </>
  )
}