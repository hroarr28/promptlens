-- Allow anyone to view public prompts (for the Explore page)
CREATE POLICY "Anyone can view public prompts" ON prompts
  FOR SELECT USING (is_public = true);

-- Index for efficient public prompt queries
CREATE INDEX IF NOT EXISTS idx_prompts_public ON prompts(is_public, created_at DESC) WHERE is_public = true;
