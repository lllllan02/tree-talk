import React from 'react';
import NodePair from './NodePair';
import NodeConnector from './NodeConnector';

const styles = {
  genealogyNode: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    marginBottom: 32,
    position: 'relative' as const,
  },
  genealogyChildren: {
    display: 'flex',
    flexDirection: 'row' as const,
    justifyContent: 'center',
    width: '100%',
    gap: 32,
    marginTop: 16,
  },
};

interface GenealogyNodeProps {
  node: any;
}

const GenealogyNode: React.FC<GenealogyNodeProps> = ({ node }) => {
  if (!node.user && !node.ai) return null;
  const hasChildren = node.children && node.children.length > 0;
  const childCount = node.children ? node.children.length : 0;

  return (
    <div style={styles.genealogyNode}>
      <NodePair user={node.user} ai={node.ai} />
      <NodeConnector childCount={childCount} />
      {hasChildren && (
        <div style={styles.genealogyChildren}>
          {node.children.map((child: any, idx: number) => (
            <GenealogyNode node={child} key={idx} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GenealogyNode; 