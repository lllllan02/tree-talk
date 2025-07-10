import React from 'react';

const styles = {
  nodePair: {
    background: '#fff',
    border: '2px solid #333',
    borderRadius: 16,
    padding: '24px 32px',
    minWidth: 400,
    marginBottom: 8,
    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'stretch',
  },
  nodeUser: {
    fontWeight: 'bold' as const,
    fontSize: 18,
    marginBottom: 16,
    color: '#222',
  },
  nodeAi: {
    fontSize: 16,
    color: '#3a7c3a',
    lineHeight: 1.7,
    borderTop: '1px dashed #bdbdbd',
    paddingTop: 12,
    marginTop: 0,
  },
};

interface NodePairProps {
  user?: { content: string } | null;
  ai?: { content: string } | null;
}

const NodePair: React.FC<NodePairProps> = ({ user, ai }) => (
  <div style={styles.nodePair}>
    <div style={styles.nodeUser}>{user ? user.content : ''}</div>
    {ai && <div style={styles.nodeAi}>{ai.content}</div>}
  </div>
);

export default NodePair; 